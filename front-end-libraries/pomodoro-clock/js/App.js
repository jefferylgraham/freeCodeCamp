class Pomodoro extends React.Component {
  render() {
    return (
      <div id="pomodoro-clock">
        <h1>Pomodoro/Tomato Clock</h1>
        <div id="timer-label">
          <p>#timer-label div session/break</p>
        </div>
        <div id="timer-left">
          <p>#timer-left div</p>
        </div>
        <div id="timing-controls">
          <div id="break-label">
            Break Length
            <div id="break-length">#Break Length #</div>
            <div id="break-controls">
              <div id="break-decrement">#break-decrement</div>
              <div id="break-increment">#break-increment</div>
            </div>
          </div>
          <div id="session-label">
            Session Length
            <div id="session-length">#Break Length #</div>
            <div id="session-controls">
              <div id="session-decrement">#break-decrement</div>
              <div id="session-increment">#break-increment</div>
            </div>
          </div>
        </div>
        <div id="controls">
          <div id="start-stop">#start-stop</div>
          <div id="reset">#reset</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Pomodoro />, document.getElementById("root"));
