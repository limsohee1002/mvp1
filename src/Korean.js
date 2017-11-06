import React from 'react';

class Korean extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div onClick={() => this.props.clickhandle(this.props.ko.id, 'kor')}>
        {this.props.ko.word}
      </div>
    )
  }
}
export default Korean;
