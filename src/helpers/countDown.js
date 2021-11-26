export default function countDown(interval) {
  setInterval(() => {
    const { timer } = this.state;
    if (timer === 0) {
      clearInterval(countDown);
      return;
    }

    this.setState({ timer: timer - 1 });
  }, interval);
}
