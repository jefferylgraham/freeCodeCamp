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
      <div>
        <Header />
        <textarea />
      </div>
    );
  }
}

class Editor extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <textarea />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Editor />
        <Preview />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
