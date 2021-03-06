import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.scss";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">Vous avez déjà un compte ?</h2>
        <span>Connectez-vous avec votre e-mail et password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="E-Mail"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
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
