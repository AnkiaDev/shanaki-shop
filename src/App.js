import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"; // Firebase authentification

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            },
            () =>
              console.log("Current user dans state :", this.state.currentUser)
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
        console.log("Current user dans state :", this.state.currentUser);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
