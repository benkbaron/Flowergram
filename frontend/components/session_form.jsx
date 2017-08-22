import React from 'react';
import { Link, withRouter } from 'react-router-dom';

  let action_title;
  let link;
  const defaultState = { username: "", password: "", full_name: "", contact_info: ""};

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = defaultState;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(input_field) {
    return event => this.setState({
      [input_field]: event.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;

    this.props.processForm(user).then(() => this.setState(defaultState));
  }

  renderErrors() {
    if (this.props.errors === undefined){
      this.props = {errors: []};
    }

    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  signUpForm() {
    return(
    <form onSubmit={this.handleSubmit}>
      <div>
        <h2>Sign Up</h2>

        <label>Full Name
          <input type="text" onChange={this.update("full_name")}
                 value={this.state.full_name}></input>
        </label>
        <br/>
        <br/>

        <label>Contact Information
          <input type="text" onChange={this.update("contact_info")}
                 value={this.state.contact_info}></input>
        </label>
        <br/>
        <br/>

        <label>Username
          <input type="text" onChange={this.update("username")}
                 value={this.state.username}></input>
        </label>
        <br/>
        <br/>

        <label>Password
          <input type="text" onChange={this.update("password")}
                 value={this.state.password}></input>
        </label>

        {this.renderErrors()}
        <button>Sign Up</button>
        <br/>
        <Link to="/login">Have an account? Log in.</Link>;
      </div>
    </form>
  )};


  logInForm() {
    return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <h2>Log In</h2>

        <label>Username
          <input type="text" onChange={this.update("username")}
                 value={this.state.username}></input>
        </label>
        <br/>
        <br/>

        <label>Password
          <input type="text" onChange={this.update("password")}
                 value={this.state.password}></input>
        </label>

        {this.renderErrors()}
        <button>Log In</button>
        <br/>
        <Link to="/signup">Don't have an account? Sign up.</Link>
      </div>
    </form>
  )};

  render(){
    if (this.props.location.pathname === "/login") {
      return (<div>{this.logInForm()}</div>);
    } else {
      return (<div>{this.signUpForm()}</div>);
    }
  }
}

export default SessionForm;
