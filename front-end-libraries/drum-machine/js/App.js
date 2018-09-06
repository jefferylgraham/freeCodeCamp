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
      display: "Display",
      //array of objects tying keyboard keys to sounds
      sounds: [
        { Q: "boom" },
        { W: "clap" },
        { E: "hihat" },
        { A: "kick" },
        { S: "openhat" },
        { D: "ride" },
        { Z: "snare" },
        { X: "tink" },
        { C: "tom" }
      ]
    };
    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    console.log("clicked");
    // var displaying = this.state.sounds[index][audioID];
    // this.setState({
    //   display: displaying.toUpperCase()
    // });
    // var x = document.getElementById(audioID);
    // x.play();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div id="drum-machine">
            <Display display={this.state.display} />
            <div id="pads">
              {this.state.sounds.map(function(sound, index) {
                return (
                  <DrumPad
                    key={index}
                    id={Object.keys(sound)[0]}
                    // onClick={() => this.playSound()}
                    soundID={sound[Object.keys(sound)[0]]}
                    soundSrc={"sounds/" + sound[Object.keys(sound)[0]] + ".wav"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
