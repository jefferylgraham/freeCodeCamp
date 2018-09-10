class Buttons extends React.Component {
  render() {
    return (
      <div id="buttons">
        <button id="decimal" value="." onClick={this.props.numbers}>
          .
        </button>
        <button id="zero" value="0" onClick={this.props.numbers}>
          0
        </button>
        <button id="one" value="1" onClick={this.props.numbers}>
          1
        </button>
        <button id="two" value="2" onClick={this.props.numbers}>
          2
        </button>
        <button id="three" value="3" onClick={this.props.numbers}>
          3
        </button>
        <button id="four" value="4" onClick={this.props.numbers}>
          4
        </button>
        <button id="five" value="5" onClick={this.props.numbers}>
          5
        </button>
        <button id="six" value="6" onClick={this.props.numbers}>
          6
        </button>
        <button id="seven" value="7" onClick={this.props.numbers}>
          7
        </button>
        <button id="eight" value="8" onClick={this.props.numbers}>
          8
        </button>
        <button id="nine" value="9" onClick={this.props.numbers}>
          9
        </button>
        <button id="clear" onClick={this.props.clear}>
          AC
        </button>
        <button id="divide" value="/" onClick={this.props.functions}>
          /
        </button>
        <button id="multiply" value="*" onClick={this.props.functions}>
          *
        </button>
        <button id="add" value="+" onClick={this.props.functions}>
          +
        </button>
        <button id="subtract" value="-" onClick={this.props.functions}>
          -
        </button>
        <button id="equals" value="=" onClick={this.props.equals}>
          =
        </button>
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      display: 0
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleFunctions = this.handleFunctions.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  clearDisplay() {
    this.setState({
      output: "",
      display: 0
    });
  }

  handleNumbers(e) {
    if (e.target.value == 0 && this.state.output == "") {
      console.log("zero cant start.");
    } else {
      this.setState({
        output: (this.state.output += e.target.value),
        display: e.target.value
      });
    }
  }

  handleFunctions(e) {
    this.setState({
      output: (this.state.output += e.target.value),
      display: e.target.value
    });
  }

  calculate(e) {
    this.setState({
      output: (this.state.output += e.target.value)
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
              <Buttons
                numbers={this.handleNumbers}
                functions={this.handleFunctions}
                clear={this.clearDisplay}
                equals={this.calculate}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
