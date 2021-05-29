import React, { Component } from 'react';

import LoginModal from 'react-login-modal';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creds: '',
      signUp: {
        password: "",
        email: "",

      },
      login: {
        email: "",
        password: ""
      }
    }
  }

  /**
   * Handle setting signUp credential state
   */
  handleSignup = (email, password) => {

    const signUp = this.state.signUp
    signUp.password = password;
    signUp.email = email

    // https://stackoverflow.com/questions/55348078/react-updates-state-when-clicked-twice
    this.setState({
      signUp,
    }, () => console.log(this.state.signUp));

  }

  /**
  * Handle setting login credential state
  */
  handleLogin = (email, password) => {
    const login = this.state.login
    login.password = password;
    login.email = email;

    this.setState({
      login,
    }, () => console.log(this.state.login));
  }

  render() {
    return (
      <div>
        <LoginModal
          handleSignup={this.handleSignup}
          handleLogin={this.handleLogin}
          buttonColor={"#693455"}
          disabledButtonColor={"#693455"}
          buttonHoverColor={"#89436e"}
          fontFamily={"roboto"}
          errorMessage={"Грешен email или парола"}
          errorEnable={true} 
          />
      </div>
    )
  }
}