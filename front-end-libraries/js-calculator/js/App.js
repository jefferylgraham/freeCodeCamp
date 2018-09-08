class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6">
            <div id="calculator">
              <div id="display">Display</div>
            </div>
            <div id="buttons">
              <button id="decimal">.</button>
              <button id="zero">0</button>
              <button id="one">1</button>
              <button id="two">2</button>
              <button id="three">3</button>
              <button id="four">4</button>
              <button id="five">5</button>
              <button id="six">6</button>
              <button id="seven">7</button>
              <button id="eight">8</button>
              <button id="nine">9</button>
              <button id="clear">AC</button>
              <button id="divide">/</button>
              <button id="multiply">*</button>
              <button id="add">+</button>
              <button id="subtract">-</button>
              <button id="equals"> = </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
