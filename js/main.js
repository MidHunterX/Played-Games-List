/*-------------------------------*\
|------ Author : Mid Hunter ------|
\*-------------------------------*/

function game_cards() {
    // Fetch API for requesting resources
    fetch("./js/db.json")
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            // Fruit Loop [i]
            for (var i = 0; i < data.length; i++) {

                document.getElementById("game-list").innerHTML +=
                    "<div class='card-bg'>" +
                    "<h3>" + data[i].id + "</h3>" +
                    "<img class='cover' src='img/" + data[i].img + ".jpg'>" +
                    "<div class='card-padding'>" +
                    "<h2>" + data[i].game + "</h2>" +
                    "<p>" + data[i].year + "</p>" +
                    "</div></div>";
            }
        })

        .catch(function (err) {
            console.log(err);
        });

}

/* Old Code :(
function game_cards(data) {
    fetch("./js/db.json")
    var table = document.getElementById('game-list')
    for (let i = 0; i < data.length; i++) {
        var string = "<div class='card-bg'>";
        string += "<h3>" + value.id + "</h3>";
        string += "<img class='cover' src='img/" + value.img + ".jpg'>";
        string += "<div class='card-padding'>";
        string += "<h2>" + value.game + "</h2>";
        string += "<p>" + value.year + "</p>";
        string += "</div></div>";
    }
    table.innerHTML += string;
}
*/
