const obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  }
};

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!';
    const options = ['thing 1', 'thing 2', 'thing 3'];
    return (
      <div>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <Action />
        <Options
          options={options}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

// Option
class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

// Options
class Options extends React.Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {
          this.props.options.map(option => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption => fetch the value typed -> if value, then alert
class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;


    alert(`value added: ${option}`);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));