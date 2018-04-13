import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainButtons extends Component {
  render() {
    return (
      <div className="button-container">
        <button className="user-btn dislike-btn" onClick={this.props.dislikeProfile}>
          &#x2716;
        </button>
        <button className="user-btn like-btn" onClick={this.props.likeProfile}>
          &#x2713;
        </button>
      </div>
    );
  }
}

MainButtons.propTypes = {
  dislikeProfile: PropTypes.func.isRequired,
  likeProfile: PropTypes.func.isRequired,
};

export default MainButtons;
