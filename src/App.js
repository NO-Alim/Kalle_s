import Navbar from "./component/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AllProduct from "./pages/AllProduct";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import WishList from "./pages/WishList";
import Footer from "./component/Footer";
import ScrollToTop from "./ScrollToTop";
import AddCartModal from "./component/AddCartModal";
import SingleProduct from "./pages/SingleProduct";
import FullCart from "./pages/FullCart";
import CheckOut from "./pages/CheckOut";
import SingleBlog from "./pages/SingleBlog";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <AddCartModal />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop/:id">
            <Shop />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/wishlist">
            <WishList />
          </Route>
          <Route exact path="/product/:id">
            <SingleProduct />
          </Route>
          <Route exact path="/fullCart">
            <FullCart />
          </Route>
          <Route exact path="/checkout">
            <CheckOut />
          </Route>
          <Route exact path="/singleblog">
            <SingleBlog />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
