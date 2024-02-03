async function setGames() {
    const response = await fetch('../gamesTest.json')
    const json = await response.json()

    for (let i = 0; i < json.games.length; i++) {
        let game = document.createElement("article")
        game.id = "game" + i
        game.className = "game"

        if (json.games[i].status === "Live") {
            game.innerHTML = "<section><div><p>" + json.games[i].status + "</p><div></div></div><section> <img src="+ json.games[i].home.logo +"> <p>" + json.games[i].home.score + "</p><p>-</p><p>" + json.games[i].away.score + "</p> <img src="+ json.games[i].away.logo +"> </section><p>" + json.games[i].arena + "</p> </section> <section> <a>Watch</a> <a> Buy Tickets</a> </section>"
            game.className = "game-live"
            
        }
        


        document.getElementById("sliderGames").appendChild(game)
    }
}

setGames()