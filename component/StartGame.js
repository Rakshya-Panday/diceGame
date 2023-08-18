import '../css/startgame.css';
const StartGame = ({togle}) => {
    return (
        <>
            <div className="startgame">
                <div className="first">
                    <img src="dice.jpg" alt="dice" />
                </div>
                <div className="second">
              <h1>Dice Game</h1>
              <button onClick={togle}>Play Now</button>
                </div>
            </div>
        </>
    )
}
export default StartGame;