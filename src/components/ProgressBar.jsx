import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProgressBar extends Component {
  render() {
    const { timer } = this.props;
    return (
      <div>
        <span id="counter">{timer}</span>
        <progress value={ timer } max="30" id="progressBar" />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  timer: PropTypes.number.isRequired,
};
