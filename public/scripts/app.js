"use strict";

console.log('app running');

// create app object title/subtitle
// use title/subtitle in the template
// render template

var app = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

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

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {

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
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (opt) {
        return React.createElement(
          "li",
          { key: opt },
          opt
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      ),
      React.createElement(
        "button",
        { disabled: app.options.length === 0, onClick: onMakeDecision },
        "What should I do?"
      ),
      React.createElement(
        "button",
        { onClick: removeAll },
        "Remove all"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();
