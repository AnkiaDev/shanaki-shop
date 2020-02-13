import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/utils/firebase"; // Firebase authentification

//Style
import "./App.css";

//Pages
import HomePage from "./pages/homepage/homepage";
import Header from "./components/header/header-component";
import ShopPage from "./pages/shop/shop";
import SignInSignUpPage from "./pages/sign-page/sign-in-up-page";

const JewelryPage = () => (
  <div>
    <h1>Jewelry Page</h1>
  </div>
);

const ClothingPage = () => (
  <div>
    <h1>Clothing Page</h1>
  </div>
);

const StonePage = () => (
  <div>
    <h1>Stone Page</h1>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header isLogged={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/jewelry" component={JewelryPage} />
          <Route path="/clothing" component={ClothingPage} />
          <Route path="/stones" component={StonePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
