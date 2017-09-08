'use strict';

console.log('app running');

var template = React.createElement(
  'h1',
  null,
  'This is JSX'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
