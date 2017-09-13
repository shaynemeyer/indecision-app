class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false
    }

  }
  handleToggle(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>{!this.state.visibility ? 'Show' : 'Hide'} details</button>
        {this.state.visibility && <div>Hello from hidden</div>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));