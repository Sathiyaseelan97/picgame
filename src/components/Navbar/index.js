import './index.css'

const Navbar = props => {
  const {score, timer} = props

  return (
    <div className="navbar-section">
      <div className="logo-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <ul className="scores-container">
        <li>
          <p className="score">
            Score: <span>{score}</span>
          </p>
        </li>
        <li>
          <div className="timer-container">
            <img
              className="timer-icon"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="timer-text">{timer} sec</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
