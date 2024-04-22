/*-------------------------------*\
|------ Author : Mid Hunter ------|
\*-------------------------------*/

function fetchGameData() {
  // Fetch API for requesting resources
  return fetch("data.json")
    .then(response => response.json())
    .catch(err => {
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

function game_cards() {
  fetchGameData()
    /* .then(function(data) { return renderGameCards(data); }) */
    .then(data => renderGameCards(data))
    .catch(err => console.error("Error rendering game cards:", err));
}
