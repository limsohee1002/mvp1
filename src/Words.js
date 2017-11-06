import React from 'react';
import Korean from './Korean';
import English from './English';
const axios = require('axios');

class Words extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kor:[],
      eng:[],
      numk:0,
      nume:0
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData() {
    axios.get('/kor')
    .then((kor) => {
      console.log(kor.data)
      this.setState({kor: kor.data})
    })

    axios.get('/eng')
    .then((eng) => {
      console.log(eng.data)
      this.setState({eng: eng.data})
    })
  }

  clickhandle(id, lan) {
    function check(prevState) {
      console.log(prevState)
      if(lan === 'kor') {
        prevState.numk = id;
      }
      if(lan === 'eng') {
        prevState.nume = id;
      }
      // prevState[lan]
      // console.log('dd', prevState)

      if(prevState.numk === prevState.nume) {

        for(var i=0; i<prevState.kor.length; i++) {
          if(prevState.kor[i].id === id){
            prevState.kor.splice(i, 1);
          }
          if(prevState.eng[i].id === id){
            prevState.eng.splice(i, 1);
          }
        }
      }
      return prevState
    }
    this.setState(check)
    // console.log(this.state.numk)
    // console.log(this.state.num)

    // this.check()
  }

  // clickhandlee(id) {
  //   this.setState({nume: id})
  //   console.log(this.state.nume)
  //   // console.log(this.state.num)
  //
  //   this.check()
  // }

  // check() {
  //   if(this.state.numk > 0 && this.state.numk > 0) {
  //     this.setState({kor: 0});
  //     this.setState({eng: 0});
  //   }
  // }

shouldComponentUpdate(nextProps, nextState) {
  if(this.state !== nextState) {
    return true;
  }
  // if(this.state.eng !== nextState.eng) {
  //   return true;
  // }
  // if(this.state.num !== nextState.num) {
  //   return true;
  // }
  return false;
}

  render() {
    return (
      <div>
        <div>
        {this.state.kor.map((obj) => {return <Korean ko={obj} clickhandle={this.clickhandle.bind(this)}/>})}
        </div>
        <div>
        {this.state.eng.map((obj) => {return <English en={obj} clickhandle={this.clickhandle.bind(this)}/>})}
        </div>
      </div>
    )
  }
}
export default Words;
