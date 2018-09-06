class Display extends React.Component {
  render() {
    return (
      <div id="display">
        <p>{this.props.display}</p>
      </div>
    );
  }
}

class DrumPad extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        id={this.props.soundID}
        className="drum-pad"
      >
        <audio id={this.props.id} className="clip" src={this.props.soundSrc} />
        {this.props.id}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "displayinf",
      sounds: [{ Q: "boom" }]
    };
    this.playSound = this.playSound.bind(this);
  }

  playSound(audioID) {
    this.setState({
      display: "boom"
    });
    var x = document.getElementById(audioID);
    x.play();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div id="drum-machine">
            <Display display={this.state.display} />
            <div id="pads">
              <DrumPad
                id={Object.keys(this.state.sounds[0])[0]}
                onClick={() =>
                  this.playSound(Object.keys(this.state.sounds[0])[0])
                }
                soundID={
                  this.state.sounds[0][Object.keys(this.state.sounds[0])[0]]
                }
                soundSrc={
                  "sounds/" +
                  this.state.sounds[0][Object.keys(this.state.sounds[0])[0]] +
                  ".wav"
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
