class Buttons extends React.Component {
  render() {
    return (
      <div id="buttons">
        <button
          id="decimal"
          className="numbers"
          value="."
          onClick={
            Number(this.props.currentNumber) % 1 == 0
              ? this.props.numbers
              : null
          }
        >
          .
        </button>
        <button
          id="zero"
          className="numbers"
          value="0"
          onClick={
            Number(this.props.currentNumber) == 0 ? null : this.props.numbers
          }
        >
          0
        </button>
        <button
          id="one"
          className="numbers"
          value="1"
          onClick={this.props.numbers}
        >
          1
        </button>
        <button
          id="two"
          className="numbers"
          value="2"
          onClick={this.props.numbers}
        >
          2
        </button>
        <button
          id="three"
          className="numbers"
          value="3"
          onClick={this.props.numbers}
        >
          3
        </button>
        <button
          id="four"
          className="numbers"
          value="4"
          onClick={this.props.numbers}
        >
          4
        </button>
        <button
          id="five"
          className="numbers"
          value="5"
          onClick={this.props.numbers}
        >
          5
        </button>
        <button
          id="six"
          className="numbers"
          value="6"
          onClick={this.props.numbers}
        >
          6
        </button>
        <button
          id="seven"
          className="numbers"
          value="7"
          onClick={this.props.numbers}
        >
          7
        </button>
        <button
          id="eight"
          className="numbers"
          value="8"
          onClick={this.props.numbers}
        >
          8
        </button>
        <button
          id="nine"
          className="numbers"
          value="9"
          onClick={this.props.numbers}
        >
          9
        </button>
        <button id="clear" onClick={this.props.clear}>
          AC
        </button>
        <button
          id="divide"
          className="functions"
          value="/"
          onClick={this.props.functions}
        >
          /
        </button>
        <button
          id="multiply"
          className="functions"
          value="*"
          onClick={this.props.functions}
        >
          *
        </button>
        <button
          id="add"
          className="functions"
          value="+"
          onClick={this.props.functions}
        >
          +
        </button>
        <button
          id="subtract"
          className="functions"
          value="-"
          onClick={this.props.functions}
        >
          -
        </button>
        <button
          id="equals"
          className="functions"
          value="="
          onClick={this.props.equals}
        >
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
      display: 0,
      currentNumber: ""
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleFunctions = this.handleFunctions.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleClear() {
    this.setState({
      output: "",
      display: 0,
      currentNumber: ""
    });
  }

  handleNumbers(e) {
    if (e.target.value == "." && this.state.currentNumber == "") {
      this.setState({
        output: this.state.output + "0" + e.target.value,
        display: e.target.value,
        currentNumber: (this.state.currentNumber += e.target.value)
      });
    } else {
      this.setState({
        output: (this.state.output += e.target.value),
        display: e.target.value,
        currentNumber: (this.state.currentNumber += e.target.value)
      });
    }
  }

  handleFunctions(e) {
    this.setState({
      output: (this.state.output += e.target.value),
      display: e.target.value,
      currentNumber: ""
    });
    console.log(this.state.currentNumber);
  }

  handleEquals(e) {
    this.setState({
      output: (this.state.output += e.target.value)
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div id="calculator">
            <div id="upper">
              <div id="output">{this.state.output}</div>
              <div id="display">{this.state.display}</div>
            </div>
            <Buttons
              currentNumber={this.state.currentNumber}
              numbers={this.handleNumbers}
              functions={this.handleFunctions}
              clear={this.handleClear}
              equals={this.handleEquals}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
