import Navbar from "./component/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AllProduct from "./pages/AllProduct";
import Blog from "./pages/Blog";
import About from "./pages/About";
import WishList from "./pages/WishList";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop/:id">
          <Shop />
        </Route>
        <Route exact path="/product">
          <AllProduct />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/wishlist">
          <WishList />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
