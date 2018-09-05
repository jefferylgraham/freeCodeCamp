class App extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  playSound(audioID) {
    var x = document.getElementById(audioID);
    x.play();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div id="drum-machine">
            <div id="display">
              <p>display</p>
            </div>
            <div id="pads">
              <div
                onClick={() => this.playSound("Q")}
                id="boom"
                className="clip drum-pad"
              >
                <audio id="Q" className="clip" src="sounds/boom.wav" />Q
              </div>
              <div
                onClick={() => this.playSound("W")}
                id="clap"
                className="clip drum-pad"
              >
                <audio id="W" className="clip" src="sounds/clap.wav" />W
              </div>
              <div
                onClick={() => this.playSound("E")}
                id="hihat"
                className="clip drum-pad"
              >
                <audio id="E" className="clip" src="sounds/hihat.wav" />E
              </div>
              <div
                onClick={() => this.playSound("A")}
                id="kick"
                className="clip drum-pad"
              >
                <audio id="A" className="clip" src="sounds/kick.wav" />A
              </div>
              <div
                onClick={() => this.playSound("S")}
                id="openhat"
                className="clip drum-pad"
              >
                <audio id="S" className="clip" src="sounds/openhat.wav" />S
              </div>
              <div
                onClick={() => this.playSound("D")}
                id="ride"
                className="clip drum-pad"
              >
                <audio id="D" className="clip" src="sounds/ride.wav" />D
              </div>
              <div
                onClick={() => this.playSound("Z")}
                id="snare"
                className="clip drum-pad"
              >
                <audio id="Z" className="clip" src="sounds/snare.wav" />Z
              </div>
              <div
                onClick={() => this.playSound("X")}
                id="tink"
                className="clip drum-pad"
              >
                <audio id="X" className="clip" src="sounds/tink.wav" />X
              </div>
              <div
                onClick={() => this.playSound("C")}
                id="tom"
                className="clip drum-pad"
              >
                <audio id="C" className="clip" src="sounds/tom.wav" />C
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
