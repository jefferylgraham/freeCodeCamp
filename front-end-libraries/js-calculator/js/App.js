class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      display: 0
    };
    this.numberClick = this.numberClick.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }

  clearDisplay() {
    this.setState({
      output: "",
      display: 0
    });
  }

  numberClick(e) {
    this.setState({
      output: (this.state.output += e.target.value),
      display: e.target.value
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6">
            <div id="calculator">
              <div id="output">{this.state.output}</div>
              <div id="display">{this.state.display}</div>
              <div id="buttons">
                <button id="decimal">.</button>
                <button id="zero">0</button>
                <button id="one" value="1" onClick={this.numberClick}>
                  1
                </button>
                <button id="two" value="2" onClick={this.numberClick}>
                  2
                </button>
                <button id="three" value="3" onClick={this.numberClick}>
                  3
                </button>
                <button id="four" value="4" onClick={this.numberClick}>
                  4
                </button>
                <button id="five" value="5" onClick={this.numberClick}>
                  5
                </button>
                <button id="six" value="6" onClick={this.numberClick}>
                  6
                </button>
                <button id="seven" value="7" onClick={this.numberClick}>
                  7
                </button>
                <button id="eight" value="8" onClick={this.numberClick}>
                  8
                </button>
                <button id="nine" value="9" onClick={this.numberClick}>
                  9
                </button>
                <button id="clear" onClick={this.clearDisplay}>
                  AC
                </button>
                <button id="divide" value="/">
                  /
                </button>
                <button id="multiply" value="*">
                  *
                </button>
                <button id="add" value="+">
                  +
                </button>
                <button id="subtract" value="-">
                  -
                </button>
                <button id="equals" value="=">
                  {" "}
                  ={" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
