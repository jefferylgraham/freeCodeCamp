class TimeLeft extends React.Component {
  render() {
    return (
      <div id="timer-label">
        <span>{this.props.minutesLeft}</span>:
        <span>{this.props.secondsLeft}</span>
      </div>
    );
  }
}

class Break extends React.Component {
  render() {
    return (
      <div id="break-length">
        <span>{this.props.breakMinutes}</span>:
        <span>{this.props.breakSeconds}</span>
      </div>
    );
  }
}

class Session extends React.Component {
  render() {
    return (
      <div id="session-length">
        <span>{this.props.sessionMinutes}</span>:
        <span>{this.props.sessionSeconds}</span>
      </div>
    );
  }
}

class Decrement extends React.Component {
  render() {
    return (
      <button>
        <i className="fas fa-angle-double-down" />
      </button>
    );
  }
}

class Increment extends React.Component {
  render() {
    return (
      <button>
        <i className="fas fa-angle-double-up" />
      </button>
    );
  }
}

class StartStop extends React.Component {
  render() {
    return (
      <button>
        <span>
          <i className="fas fa-play" />
        </span>
        <span>
          <i className="fas fa-pause" />
        </span>
      </button>
    );
  }
}

class Reset extends React.Component {
  render() {
    return (
      <button>
        <i className="fas fa-sync-alt" />
      </button>
    );
  }
}

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutesLeft: "25",
      secondsLeft: "00",
      breakMinutes: "5",
      breakSeconds: "00",
      sessionMinutes: "25",
      sessionSeconds: "00"
    };
  }

  render() {
    return (
      <div className="text-center" id="pomodoro-clock">
        <h1>Tomato Clock</h1>
        <div id="timer-left">
          <TimeLeft
            minutesLeft={this.state.minutesLeft}
            secondsLeft={this.state.secondsLeft}
          />
        </div>
        <div id="timer-controls">
          <div id="break-label">
            Break Length
            <Break
              breakMinutes={this.state.breakMinutes}
              breakSeconds={this.state.breakSeconds}
            />
            <div id="break-controls">
              <div id="break-decrement">
                <Decrement />
              </div>
              <div id="break-increment">
                <Increment />
              </div>
            </div>
          </div>
          <div id="session-label">
            Session Length
            <Session
              sessionMinutes={this.state.sessionMinutes}
              sessionSeconds={this.state.sessionSeconds}
            />
            <div id="session-controls">
              <div id="session-decrement">
                <Decrement />
              </div>
              <div id="session-increment">
                <Increment />
              </div>
            </div>
          </div>
        </div>
        <div id="controls">
          <div id="start-stop">
            <StartStop />
          </div>
          <div id="reset">
            <Reset />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Pomodoro />, document.getElementById("root"));
