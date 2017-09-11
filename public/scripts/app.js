"use strict";

console.log('app running');

// create app object title/subtitle
// use title/subtitle in the template
// render template

var app = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: ['One', 'Two']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    "app.subtitle"
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  )
);

var user = {
  name: "Shayne",
  age: "?",
  location: "Seattle"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'Anonymous'
  ),
  (user.age && user.age) >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
