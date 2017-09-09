"use strict";

console.log('app running');

// create app object title/subtitle
// use title/subtitle in the template
// render template

var app = {
  title: "Indecision App",
  subtitle: "This is some info"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  )
);

var user = {
  name: "Shayne",
  age: "?",
  location: "Seattle, WA."
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
