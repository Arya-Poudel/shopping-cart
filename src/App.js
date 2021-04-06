import React, {useState} from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import ShopItems from './Components/ShopItems';


function App() {

  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemToCart = (item) =>{
      setShoppingCart([...shoppingCart, item])
  }

  const removeItemFromCart = (itemid) => {
    shoppingCart.splice(itemid,1);
    console.log(shoppingCart);
    setShoppingCart(shoppingCart);
  }


  return (
    <div className="App">
     <BrowserRouter>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart({shoppingCart.length})</Link>
        </nav>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shop/:id" 
                   render={(routeProps) =>(
                     <ShopItems 
                              dressId = {routeProps.match.params.id}
                              addItemToCart={addItemToCart}
                      />
                    )}
              />
              <Route exact path="/cart"
                     render = {() => (
                      <Cart
                            shoppingCart = {shoppingCart}
                            addItemToCart = {addItemToCart}
                            removeItemFromCart ={removeItemFromCart}
                       />
                    )}
              />
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;