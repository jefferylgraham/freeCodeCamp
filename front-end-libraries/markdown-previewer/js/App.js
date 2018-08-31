class ToggleButton extends React.Component {
  render() {
    return (
      <button>
        <i className="fas fa-window-maximize" />
      </button>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <ToggleButton />
      </header>
    );
  }
}

class Preview extends React.Component {
  render() {
    return (
      <div className="col-8">
        <Header />
        <textarea placeholder={this.props.previewText} />
      </div>
    );
  }
}

class Editor extends React.Component {
  render() {
    return (
      <div className="col-4">
        <Header />
        <textarea placeholder={this.props.editorText} />
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInput: "Editor",
      previewInput: "Preview"
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <Editor editorText={this.state.editorInput} />
        </div>
        <div className="row justify-content-center">
          <Preview previewText={this.state.previewInput} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
