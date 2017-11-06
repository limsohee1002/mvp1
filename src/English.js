import React from 'react';

class English extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

      <div onClick={() => this.props.clickhandle(this.props.en.id, 'eng')}>
        {this.props.en.word}
      </div>
    )
  }
}
export default English;
