import React from "react";

class Planning extends React.Component {
  state = {
    isLoading: true,
    movies: [] //앞으로 미래에 쓸 것들을 써둠(선언). 굳이 안 써둬도 됨
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, book: true }); //book처럼 새로운 state 추가해도 됨
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading. . ." : "We are ready"}</div>;
  }
}
export default Planning;
