import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Ranking extends Component {
  constructor() {
    super();
    this.handleHomeBtn = this.handleHomeBtn.bind(this);
  }

  handleHomeBtn() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const rankingStorage = JSON.parse(localStorage.getItem('ranking'));
    return (
      <div>
        <h1 data-testid="ranking-title">Pagina de ranking</h1>
        {
          rankingStorage.sort((a, b) => b.score - a.score).map((playerRank, index) => {
            const { name, score, picture } = playerRank;
            return (
              <div key={ `${name}${score}${picture}__${index}` }>
                <img src={ picture } alt={ `${name} avatar` } />
                <p data-testid={ `player-name-${index}` }>{ name }</p>
                <p data-testid={ `player-score-${index}` }>{ score }</p>
              </div>
            );
          })
        }
        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ this.handleHomeBtn }
        >
          Go to Home
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
