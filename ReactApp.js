class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }
        this.shotSound = new Audio('./assets/Swish+2.wav')
        this.scoreSound = new Audio('assets/cheer.wav')
    }

    shotHandler = () => {
        let score = this.state.score
        this.shotSound.play()

        if (Math.random() > 0.5) {
            score += 1

            setTimeout(() => {
                this.scoreSound.play()
            }, 400)
        }



        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
        if (this.state.shots < 11) {

        }
    }

    render() {
        let shotPercentageDiv

        if (this.state.shots) {
            const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
            shotPercentageDiv = (
                <div>
                    <strong>Shooting %:</strong> {shotPercentage}
                </div>
            )
        }
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>

                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>
                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>
                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>
                {shotPercentageDiv}
                <button onClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }
}

function Game(props) {
    return (
        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
            <div className="Stats">
                <Team
                    name={props.visitingTeam.name}
                    logo={props.visitingTeam.logoSrc}
                />


                <div className="versus">
                    <h1>VS</h1>
                </div>
                <Team
                    name={props.homeTeam.name}
                    logo={props.homeTeam.logoSrc}
                />
            </div>
        </div>
    )
}

function App(props) {
    const raccoons = {
        name: "Racoons",
        logoSrc: "Racoons.jpg"
    }

    const squirrels = {
        name: "Squirrels",
        logoSrc: "Squirrels.png"
    }
    const bunnies = {
        name: "Bunnies",
        logoSrc: "Bunnies.png"
    }
    const hounds = {
        name: "Hounds",
        logoSrc: "Hounds.gif"
    }
    return (
        <div className="App">
            <Game venue="Union 52 Gem"
            homeTeam = {squirrels}
            visitingTeam = {raccoons}
             />
            <Game venue="Sheridan Arena"
            homeTeam = {bunnies}
            visitingTeam = {hounds} />
        </div>
    )
}



// Render the App
ReactDOM.render(
    <App />,
    document.getElementById('root')
)