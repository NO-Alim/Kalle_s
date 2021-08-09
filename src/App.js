import Navbar from "./component/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Route exact path="/">
          
        </Route>
      </Router>
    </div>
  );
}

export default App;
