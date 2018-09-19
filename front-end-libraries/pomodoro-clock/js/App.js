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
        <p>{this.props.remainingTime}</p>
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
        <div id="session-decrement">#break-decrement</div>
        <div id="session-increment">#break-increment</div>
      </div>
    );
  }
}

class BreakLabel extends React.Component {
  render() {
    return (
      <div id="break-label">
        Break Length
        <div id="break-length">#Break Length</div>
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
        <div id="session-length">#Session Length</div>
        <SessionControls />
      </div>
    );
  }
}

class TimeSettings extends React.Component {
  render() {
    return (
      <div id="timer-controls">
        <BreakLabel />
        <SessionLabel />
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
      timeLeft: "25:00"
    };
  }

  render() {
    return (
      <div className="text-center" id="pomodoro-clock">
        <h1>Tomato Clock</h1>
        <TimerLabel label={this.state.timerLabel} />
        <TimeLeft remainingTime={this.state.timeLeft} />
        <TimeSettings />
        <TimeControls />
      </div>
    );
  }
}

ReactDOM.render(<Pomodoro />, document.getElementById("root"));
