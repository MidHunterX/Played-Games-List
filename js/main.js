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
            n = data.length

            for (var i = 0; i < data.length; i++) {

                document.getElementById("game-list").innerHTML +=
                    "<div class='card-bg'>" +
                    "<p class='text-serial'>" + n + "</p>" +
                    "<img class='cover' src='img/" + data[i].img + ".jpg'>" +
                    "<div class='card-padding'>" +
                    "<h3 class='text-title'>" + data[i].game + "</h3>" +
                    "<p class='text-year'>" + data[i].year + "</p>" +
                    "</div></div>";
                n--;
            }
        })

        .catch(function (err) {
            console.log(err);
        });
}
