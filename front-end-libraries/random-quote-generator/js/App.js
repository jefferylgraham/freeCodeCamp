"use strict";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      quotes: []
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            quotes: result.quotes
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  changeQuote() {
    this.setState({});
  }

  render() {
    const { error, isLoaded, quotes } = this.state;
    let index = Math.floor(Math.random() * quotes.length);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-5">
              <div>
                <QuoteText quoteText={quotes[index].quote} />
                <QuoteAuthor quoteAuthor={quotes[index].author} />
              </div>
              <div>
                <TweetQuote />
                <NewQuote
                  onClick={this.changeQuote}
                  text={this.state.isToggleOn ? "ON" : "OFF"}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

class QuoteText extends React.Component {
  render() {
    return <p>{this.props.quoteText}</p>;
  }
}

class QuoteAuthor extends React.Component {
  render() {
    return <p>{this.props.quoteAuthor}</p>;
  }
}

class TweetQuote extends React.Component {
  render() {
    return (
      <button>
        <i className="fab fa-twitter-square" />
      </button>
    );
  }
}

class NewQuote extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.text}</button>;
  }
}

ReactDOM.render(<QuoteBox />, document.getElementById("root"));
