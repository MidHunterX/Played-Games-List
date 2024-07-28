let gameData = [];

function fetchGameData() {
  return fetch("data.json")
    .then((response) => response.json())
    .catch((err) => {
      console.error("Error fetching game data:", err);
      return [];
    });
}

function renderGameCards(data) {
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `
      <div class='card-bg'>
        <p class='text-serial'>${data.length - i}</p>
        <img loading="lazy" class='cover' src='img/${data[i].img}.jpg'>
        <div class='card-padding'>
          <p class='text-title'>${data[i].game}</p>
          <p class='text-year'>${data[i].year}</p>
        </div>
      </div>`;
  }
  document.getElementById("game-list").innerHTML = html;
}

function sort_game_cards() {
  const sortOption = document.getElementById("sort-options").value;
  let sortedData = [...gameData];
  // The triple dots are known as the spread operator, which takes an
  // iterable(array, string, or object) and expands it to individual values.
  switch (sortOption) {
    case "id-asc":
      sortedData.sort((a, b) => a.id - b.id);
      break;
    case "id-desc":
      sortedData.sort((a, b) => b.id - a.id);
      break;
    case "year-asc":
      sortedData.sort((a, b) => a.year - b.year);
      break;
    case "year-desc":
      sortedData.sort((a, b) => b.year - a.year);
      break;
    case "name-asc":
      sortedData.sort((a, b) => a.game.localeCompare(b.game));
      break;
    case "name-desc":
      sortedData.sort((a, b) => b.game.localeCompare(a.game));
      break;
  }
  renderGameCards(sortedData);
}

function game_cards() {
  fetchGameData()
    /* .then(function(data) { return renderGameCards(data); }) */
    .then((data) => {
      gameData = data;
      renderGameCards(gameData);
    })
    .catch((err) => console.error("Error rendering game cards:", err));
}
