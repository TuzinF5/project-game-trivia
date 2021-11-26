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
            clearInterval(this.state.countDown);
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
    countDown(1000);
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
