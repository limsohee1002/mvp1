import React from 'react';
import ReactDOM from 'react-dom';
import Words from './Words';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(

    // console.log('testt')
    React.createElement(Words),
    document.getElementById('mount')
  );
});
