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

  componentWillReceiveProps(nextProps){
    if (this.props.location.pathname !== nextProps.location.pathname){
      this.props.clearAllErrors();
      this.setState(defaultState);
    }
  }

  update(input_field) {
    return event => this.setState({
      [input_field]: event.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.clearAllErrors();
    this.props.processForm(user);
  }

  launchDemo(e){
    e.preventDefault();
    dispatch(login({username: "LadyoftheHouse", password: "password"}));
  }

  renderError(key, field){
    if (this.props.errors[key]){
      return (<li className="li-error">{field} {this.props.errors[key]}</li>)
    }
  }

  signUpForm() {
    return(
    <div className="auth-form-signup">

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Full Name" onChange={this.update("full_name")}
                value={this.state.full_name}></input>
              {this.renderError("full_name", "Full Name")}


          <input type="text" placeholder="Mobile Number or Email"
                onChange={this.update("contact_info")}
                value={this.state.contact_info}></input>
              {this.renderError("contact_info", "Contact Info")}


          <input type="text" placeholder="Username"
                 onChange={this.update("username")}
                 value={this.state.username}></input>
               {this.renderError("username", "Username")}


          <input type="password" placeholder="Password"
                 onChange={this.update("password")}
                 value={this.state.password}></input>
               {this.renderError("password", "Password")}

          <button>Sign Up</button>

        </form>

        <form onSubmit={this.launchDemo} className="demo-button"><button>Demo</button>

        </form>
    </div>
  );}


  logInForm() {
    return (
    <div className="auth-form-login">
      <form onSubmit={this.handleSubmit}>

          <input type="text" placeholder="Username"
                 onChange={this.update("username")}
                 value={this.state.username}></input>
               <li className="li-error">{this.props.errors["username"]}</li>


          <input type="password" placeholder="Password"
                 onChange={this.update("password")}
                 value={this.state.password}></input>
               <li className="li-error">{this.props.errors["password"]}</li>

          <button>Log In</button>

      </form>
    </div>
  );}

  render(){
    if (this.props.location.pathname === "/login") {
      return (
        <div className="cover-page">
          <div className="flower-box"><img className='cover-flower' src={`${window.images.coverFlower}`}/></div>
          <section className='right-half'>
            <div className="title-and-auth-form"><h1 className="title">Flowergram</h1><h2 className="tag-line">Stop and smell the roses.</h2>{this.logInForm()}</div>
            <div className="swap-form"><div>Don't have an account?</div><div><Link to="/signup">Sign up</Link></div></div>
          </section>
        </div>
      );
    } else {
      return (
        <div className="cover-page">
          <div className="flower-box"><img className='cover-flower' src={`${window.images.coverFlower}`}/></div>
          <section className='right-half'>
            <div className="title-and-auth-form"><h1 className="title">Flowergram</h1><h2 className="tag-line">Stop and smell the roses.</h2>{this.signUpForm()}</div>
            <div className="swap-form"><div>Have an account?</div><div><Link to="/login">Log in</Link></div></div>
          </section>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);
