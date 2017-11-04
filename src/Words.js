import React from 'react';

class Words extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    //   words: []
    };
  }
  // getData(){
  //   axios.get('/data').then(function(response){
  //     console.log(response)
  //     this.setState({words: response.body.words})
  //   })
  // }
  render() {
    return (
      // <Korean/>//pass down koren words data
      // <English/>//pass down english words data
      // <button
      //   onClick={() => {
      //     this.setState({ count: this.state.count + 1 });
      //   }}
      // >
      //   Count: {this.state.count}
      // </button>
      <button>{this.state.count}</button>
    );
  }
}
export default Words;
