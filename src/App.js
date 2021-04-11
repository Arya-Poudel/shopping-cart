import React, {useState} from "react";
import { HashRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import ShopItems from './Components/ShopItems';
import Checkout from './Components/Checkout';


function App() {

  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemToCart = (item) =>{
    setShoppingCart([...shoppingCart, item])
  }

  const removeItemFromCart = (itemid) => {
    setShoppingCart(shoppingCart.filter(shopItems => shopItems.id !== itemid));
  }


  return (
    <div className="App">
     <HashRouter basename="/">
        <Navbar shoppingCart={shoppingCart} />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shop/:id" 
                   render = {(routeProps) =>(
                     <ShopItems 
                              dressId = {routeProps.match.params.id}
                              addItemToCart={addItemToCart}
                              shoppingCart={shoppingCart}
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
              <Route exact path="/checkout" component={Checkout} />
         </Switch>
      </HashRouter>
    </div>
  );
}

export default App;