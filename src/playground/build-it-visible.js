const appRoot = document.getElementById('app');

let hideDiv = true;

const toggleDiv = () => {
  hideDiv = !hideDiv;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDiv}>{hideDiv ? 'Show' : 'Hide'} details</button>
      <div hidden={hideDiv}>
        Hello from hidden
      </div>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
