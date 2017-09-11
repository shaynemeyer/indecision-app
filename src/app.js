console.log('app running');

// create app object title/subtitle
// use title/subtitle in the template
// render template

const app = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>app.subtitle</p>}
    <p>{app.options.length>0 ? 'Here are your options': 'No options'}</p>
  </div>
);

const user = {
  name: "Shayne",
  age: "?",
  location: "Seattle"
};

function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name: 'Anonymous'}</h1>
    {(user.age && user.age) >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);