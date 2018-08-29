class ToggleButton extends React.Component {
  render() {
    return (
      <button>
        <i class="fas fa-window-maximize" />
      </button>
    );
  }
}

ReactDOM.render(<ToggleButton />, document.getElementById("root"));
