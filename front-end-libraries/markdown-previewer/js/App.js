const Header = props => {
  return <header>{props.children}</header>;
};

const Button = props => {
  return <button>{props.children}</button>;
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInput: "",
      editorActive: false,
      previewActive: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      editorInput: event.target.value
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div id="editor-component" className="col-7">
            <Header>
              Editor
              <Button>
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
        </div>
        <div className="row justify-content-center">
          <div id="preview-component" className="col-9">
            <Header>
              Preview
              <Button>
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
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
