import React from 'react';
import ReactDOM from 'react-dom';
import Words from './Words';

const axios = require('axios');


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    // React.createElement(Words),
    <Words/>,
    document.getElementById('mount')
  );
});
