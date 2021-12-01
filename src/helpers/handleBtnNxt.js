export default function handleBtnNxt() {
  const { questionSelector } = this.state;
  const { history } = this.props;
  const FOUR = 4;
  if (questionSelector === FOUR) {
    history.push('/feedback');
  }
  const wrongs = document.querySelectorAll('.wrong');
  const correct = document.querySelector('.correct');
  correct.classList.remove('correct-answer');
  wrongs.forEach((wrong) => wrong.classList.remove('wrong-answer'));
  this.setState({
    timer: 30,
    questionSelector: questionSelector + 1,
  });
}
