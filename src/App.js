import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/cart" component={Cart} />
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
