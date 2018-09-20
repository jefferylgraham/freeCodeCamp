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
        <span>{this.props.breakLength}</span>
      </div>
    );
  }
}

class Session extends React.Component {
  render() {
    return (
      <div id="session-length">
        <span>{this.props.sessionLength}</span>
      </div>
    );
  }
}

class Decrement extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        <i className="fas fa-angle-double-down" />
      </button>
    );
  }
}

class Increment extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
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
      breakLength: "5",
      sessionLength: "25"
    };

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement(interval) {
    switch (interval) {
      case "break":
        this.setState({
          breakLength: (this.state.breakLength -= 1)
        });
        break;
      case "session":
        this.setState({
          sessionLength: (this.state.sessionLength -= 1)
        });
        break;
      default:
        console.log("Default");
    }
  }

  increment(interval) {
    switch (interval) {
      case "break":
        this.setState({
          breakLength: (this.state.breakLength += 1)
        });
        break;
      case "session":
        this.setState({
          sessionLength: (this.state.sessionLength += 1)
        });
        break;
      default:
        console.log("Default");
    }
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
            <Break breakLength={this.state.breakLength} />
            <div id="break-controls">
              <div id="break-decrement">
                <Decrement onClick={() => this.decrement("break")} />
              </div>
              <div id="break-increment">
                <Increment onClick={() => this.increment("break")} />
              </div>
            </div>
          </div>
          <div id="session-label">
            Session Length
            <Session sessionLength={this.state.sessionLength} />
            <div id="session-controls">
              <div id="session-decrement">
                <Decrement onClick={() => this.decrement("session")} />
              </div>
              <div id="session-increment">
                <Increment onClick={() => this.increment("session")} />
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
