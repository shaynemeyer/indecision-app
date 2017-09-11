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

let count = 0;
const addOne = () => {
  console.log('addOne');
};

const minusOne = () => {
  console.log('minusOne');
};

const resetButton = () => {
  console.log('reset');
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={resetButton}>reset</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);