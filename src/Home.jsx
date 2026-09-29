import { useEffect, useState } from "react";
import "./Home.css";

 const Home=()=> {

  const [games, setGames] = useState([]);

  const getGameData = async () => {

    try {

      let apiResponse = await fetch('https://www.freetogame.com/api/games')
      apiResponse = await apiResponse.json()
      setGames(apiResponse)

    } catch (error) {

      console.log(error)
      alert("API CALL Failed")
    }
  }

  useEffect(() => {
    getGameData()
  }, [])

  console.log(games)

  return (
    <div>

      <h1>Free Games</h1>

      <div className="game-container">

        {games.map((game) => (

          <div className="card" key={game.id}>

            <img src={game.thumbnail} alt={game.title} />

            <div className="card-content">

              <h2>{game.title}</h2>

              <p>{game.short_description}</p>

              <p>
                <b>Genre:</b> {game.genre}
              </p>

              <p>
                <b>Platform:</b> {game.platform}
              </p>


            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;