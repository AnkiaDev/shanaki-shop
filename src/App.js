import React from "react";
import { Route, Switch } from "react-router-dom";

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

function App() {
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

export default App;
