import React, { Component } from "react";

import "./sign-in.scss";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { signInWithGoogle } from "../../firebase/utils/firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Vous avez déjà un compte ?</h2>
        <span>Connectez-vous avec votre e-mail et password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
