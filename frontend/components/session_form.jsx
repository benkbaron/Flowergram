import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

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
    const newState = merge({}, this.state, { password: ""});
    this.props.processForm(user).then(null, () => this.setState(newState));
  }


  renderErrors() {

    return(
      <ul>
        {this.props.errors.map((error, idx) => ( <li key={`${idx}`}>{error}</li>))}
      </ul>
    );
  }

  signUpForm() {
    return(
    <div className="auth-form">
      <form onSubmit={this.handleSubmit}>
        <div className="auth-inputs">

          <input type="text" placeholder="Full Name" onChange={this.update("full_name")}
                value={this.state.full_name}></input>
          <br/>
          <br/>

          <input type="text" placeholder="Contact Information"
                onChange={this.update("contact_info")}
                value={this.state.contact_info}></input>
          <br/>
          <br/>

          <input type="text" placeholder="Username"
                 onChange={this.update("username")}
                 value={this.state.username}></input>
          <br/>
          <br/>

          <input type="password" placeholder="Password"
                 onChange={this.update("password")}
                 value={this.state.password}></input>

          {this.renderErrors()}
          <button>Sign Up</button>
          <br/>Have an account?
          <Link to="/login">Log in.</Link>
        </div>
      </form>
    </div>
  )};


  logInForm() {
    return (
    <div className="auth-form">
      <form onSubmit={this.handleSubmit}>
        <div className="auth-inputs">

          <input type="text" placeholder="Username"
                 onChange={this.update("username")}
                 value={this.state.username}></input>
          <br/>
          <br/>

          <input type="password" placeholder="Password"
                 onChange={this.update("password")}
                 value={this.state.password}></input>

          {this.renderErrors()}
          <button>Log In</button>
          <br/>Don't have an account?
          <Link to="/signup">Sign up.</Link>
        </div>
      </form>
    </div>
  )};

  render(){
    if (this.props.location.pathname === "/login") {
      return this.logInForm()
    } else {
      return this.signUpForm()
    }
  }
}

export default withRouter(SessionForm);
