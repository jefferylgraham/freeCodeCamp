const Header = props => {
  return <header>{props.children}</header>;
};

const Button = props => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorActive: false,
      previewActive: false,
      editorInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({
      editorInput: event.target.value
    });
  }

  handleClick(divName) {
    if (divName === "editor-component") {
      this.setState({
        editorActive: !this.state.editorActive
      });
    } else {
      this.setState({
        previewActive: !this.state.previewActive
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          {this.state.previewActive ? null : (
            <div
              id="editor-component"
              className={this.state.editorActive ? "col-12" : "col-7"}
            >
              <Header>
                Editor
                <Button onClick={() => this.handleClick("editor-component")}>
                  <i
                    className={
                      this.state.editorActive
                        ? "fa fa-window-minimize"
                        : "fa fa-window-maximize"
                    }
                  />
                </Button>
              </Header>
              <textarea id="editor" onChange={this.handleChange} />
            </div>
          )}
        </div>
        <div className="row justify-content-center">
          {this.state.editorActive ? null : (
            <div
              id="preview-component"
              className={this.state.previewActive ? "col-12" : "col-9"}
            >
              <Header>
                Preview
                <Button onClick={() => this.handleClick("preview-component")}>
                  <i
                    className={
                      this.state.previewActive
                        ? "fa fa-window-minimize"
                        : "fa fa-window-maximize"
                    }
                  />
                </Button>
              </Header>
              <p id="preview">{this.state.editorInput}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
