import React, { Component } from "react";

class Twitter extends Component {
  onClickTwitter = () => {
    window.open("https://www.twitter.com/intent/tweet?&url=https://mood-log.netlify.app/");
  };
  render() {
    return (
      <div className="Twitter">
        <button onClick={this.onClickTwitter} className="share-btn">
          <img src="images/twitter.png" alt="twitter" />
        </button>
      </div>
    );
  }
}

export default Twitter;
