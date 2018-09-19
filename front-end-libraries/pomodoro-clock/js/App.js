class TimerLabel extends React.Component {
  render() {
    return (
      <div id="timer-label">
        <p>{this.props.label}</p>
      </div>
    );
  }
}

class TimeLeft extends React.Component {
  render() {
    return (
      <div id="timer-left">
        <span id="tl-minutes">{this.props.minutesLeft}</span>:
        <span id="tl-seconds">{this.props.secondsLeft}</span>
      </div>
    );
  }
}

class BreakLabel extends React.Component {
  render() {
    return (
      <div id="break-label">
        Break Length
        <div id="break-length">
          <span id="bl-minutes">{this.props.breakMinutes}</span>:
          <span id="bl-seconds">{this.props.breakSeconds}</span>
        </div>
        <BreakControls />
      </div>
    );
  }
}

class SessionLabel extends React.Component {
  render() {
    return (
      <div id="session-label">
        Session Length
        <div id="session-length">
          <span id="sl-minutes">{this.props.sessionMinutes}</span>:
          <span id="sl-seconds">{this.props.sessionSeconds}</span>
        </div>
        <SessionControls />
      </div>
    );
  }
}

class BreakControls extends React.Component {
  render() {
    return (
      <div id="break-controls">
        <div id="break-decrement">#break-decrement</div>
        <div id="break-increment">#break-increment</div>
      </div>
    );
  }
}

class SessionControls extends React.Component {
  render() {
    return (
      <div id="session-controls">
        <div id="session-decrement">#session-decrement</div>
        <div id="session-increment">#session-increment</div>
      </div>
    );
  }
}

class TimeSettings extends React.Component {
  render() {
    return (
      <div id="timer-controls">
        <BreakLabel
          breakMinutes={this.props.breakMinutes}
          breakSeconds={this.props.breakSeconds}
        />
        <SessionLabel
          sessionMinutes={this.props.sessionMinutes}
          sessionSeconds={this.props.sessionSeconds}
        />
      </div>
    );
  }
}

class TimeControls extends React.Component {
  render() {
    return (
      <div id="controls">
        <div id="start-stop">#start-stop</div>
        <div id="reset">#reset</div>
      </div>
    );
  }
}

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerLabel: "Session",
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
        <TimerLabel label={this.state.timerLabel} />
        <TimeLeft
          minutesLeft={this.state.minutesLeft}
          secondsLeft={this.state.secondsLeft}
        />
        <TimeSettings
          breakMinutes={this.state.breakMinutes}
          breakSeconds={this.state.breakSeconds}
          sessionMinutes={this.state.sessionMinutes}
          sessionSeconds={this.state.sessionSeconds}
        />
        <TimeControls />
      </div>
    );
  }
}

ReactDOM.render(<Pomodoro />, document.getElementById("root"));
