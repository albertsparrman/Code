async function setGames() {
    const response = await fetch('../gamesTest.json')
    const json = await response.json()

    for (let i = 0; i < json.games.length; i++) {
        let game = document.createElement("article")
        game.id = "game" + i
        game.className = "game"

        if (json.games[i].status === "live") {
            game.innerHTML = "<section> <img src="+ json.games[i].home.logo +"> <p>" + json.games[i].home.score + "-" + json.games[i].away.score + "</p> <img src="+ json.games[i].away.logo +"> </section>"
            game.className = "game-live"
        }
        
        document.getElementById("sliderGames").appendChild(game)
    }
}

setGames()