import React, { Component } from 'react';

class Facebook extends Component {
  onClickFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://mood-log.netlify.app/')
  }
  render() {
    return (
      <div className="Facebook">
        <button className="share-btn" onClick={this.onClickFacebook}><img src="images/facebook.png" alt="facebook" /></button>
      </div>
    );
  }
}

export default Facebook;