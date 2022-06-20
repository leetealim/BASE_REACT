export class classEvent extends Component {
  state = {
    num: 0,
  };
  render() {
    const handlePlus = () => {
      this.setState({
        num: this.state.num + 1,
      });
    };

    const handleMinus = () => {
      this.setState({
        num: this.state.num - 1,
      });
    };
    return (
      <div>
        <h3>{this.state.num}</h3>
        <button onClick={handlePlus}>+</button>
        <buttonon Click={handleMinus}>-</buttonon>
      </div>
    );
  }
}
