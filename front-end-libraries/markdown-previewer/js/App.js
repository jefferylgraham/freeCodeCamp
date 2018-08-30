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
        <textarea />
      </div>
    );
  }
}

class Editor extends React.Component {
  render() {
    return (
      <div className="col-4">
        <Header />
        <textarea />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <Editor />
        </div>
        <div className="row justify-content-center">
          <Preview />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
