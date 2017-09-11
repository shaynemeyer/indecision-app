console.log('app running');

// create app object title/subtitle
// use title/subtitle in the template
// render template

const app = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: []
};

const onFormSubmit =(e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const removeAll = () => {
  app.options = [];
  renderTemplate();
}

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


const appRoot = document.getElementById('app');


const renderTemplate = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>app.subtitle</p>}
      <p>{app.options.length>0 ? 'Here are your options': 'No options'}</p>
      <p>{app.options.length}</p>
      <ol>
        <li>item one</li>
        <li>item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        <button onClick={removeAll}>Remove all</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();
