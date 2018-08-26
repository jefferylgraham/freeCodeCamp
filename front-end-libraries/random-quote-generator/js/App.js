"use strict";

class QuoteBox extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="row justify-content-center">
          <div class="col-5">
            <div>
              <QuoteText />
              <QuoteAuthor />
            </div>
            <div>
              <TweetQuote />
              <NewQuote />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class QuoteText extends React.Component {
  render() {
    return <p>Quote Text</p>;
  }
}

class QuoteAuthor extends React.Component {
  render() {
    return <p>Quote Author</p>;
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
    return <button>New Quote</button>;
  }
}

ReactDOM.render(<QuoteBox />, document.getElementById("root"));
