import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProgressBar extends Component {
  constructor() {
    super();

    this.state = {
      totalTime: 30,
      countDown: (interval) => {
        setInterval(() => {
          const { totalTime } = this.state;
          if (totalTime === 0) {
            const { countDown } = this.state;
            clearInterval(countDown);
            console.log('aloo');
            return;
          }

          this.setState({ totalTime: totalTime - 1 });
        }, interval);
      },
    };
  }

  componentDidMount() {
    const { countDown } = this.state;
    const INTERVAL = 1000;
    countDown(INTERVAL);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { totalTime } = this.state;
    const { disableAnswers } = this.props;
    if (prevState.totalTime !== totalTime && totalTime === 0) {
      disableAnswers();
    }
  }

  render() {
    const { totalTime } = this.state;
    return (
      <div>
        <span id="counter">{totalTime}</span>
        <progress value={ totalTime } max="30" id="progressBar" />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  disableAnswers: PropTypes.func.isRequired,
};
