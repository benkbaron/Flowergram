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
    this.props.processForm(user);
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
          <br/>
          <button>Demo</button>
          <br/>
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
          <button>Demo</button>
          <br/>
        </div>
      </form>
    </div>
  )};

  render(){
    if (this.props.location.pathname === "/login") {
      return (
        <div className="cover-page">
          <div className="flower-box"><img className='cover-flower' src='/assets/cover_flower.jpg'/></div>
          <section className='right-half'>
            <div className="title-and-auth-form"><h1 className="title">Flowergram</h1>{this.logInForm()}</div>
            <div className="swap-form"><div>Don't have an account?</div><Link to="/signup">Sign up.</Link></div>
          </section>
        </div>
      )
    } else {
      return (
        <div className="cover-page">
          <div className="flower-box"><img className='cover-flower' src='/assets/cover_flower.jpg'/></div>
          <section className='right-half'>
            <div className="title-and-auth-form"><h1 className="title">Flowergram</h1>{this.signUpForm()}</div>
            <div className="swap-form"><div>Have an account?</div><Link to="/login">Log in.</Link></div>
          </section>
        </div>
      )
    }
  }
}

export default withRouter(SessionForm);
