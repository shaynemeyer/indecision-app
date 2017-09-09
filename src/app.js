console.log('app running');

// create app object title/subtitle
// use title/subtitle in the template
// render template

var app = {
  title: "Indecision App",
  subtitle: "This is some info"
};

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

var user = {
  name: "Shayne",
  age: "?",
  location: "Seattle, WA."
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);