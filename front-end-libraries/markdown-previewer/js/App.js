class EditorButton extends React.Component {
  render() {
    return (
      <button>
        <i className="fas fa-window-maximize" />
      </button>
    );
  }
}

class PreviewButton extends React.Component {
  render() {
    return (
      <button>
        <i className="fas fa-window-maximize" />
      </button>
    );
  }
}

class EditorText extends React.Component {
  render() {
    return <textarea />;
  }
}

class PreviewText extends React.Component {
  render() {
    return <textarea />;
  }
}

class Preview extends React.Component {
  render() {
    return <div className="col-8" />;
  }
}

class Editor extends React.Component {
  render() {
    return <div className="col-4" />;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInput: "Editor",
      previewInput: "Preview",
      editorMinimized: true,
      previewMinimized: true
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6">
            <header>
              Editor Header
              <EditorButton />
            </header>
            <EditorText />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-8">
            <header>
              Preview Header
              <PreviewButton />
            </header>
            <PreviewText />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
