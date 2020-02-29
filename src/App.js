import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"; // Firebase authentification
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";

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
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
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
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
