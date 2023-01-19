/* eslint-disable jsx-a11y/anchor-is-valid */
//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OfferSale from './Components/OfferSale';
import AboutPage from "./Components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/">
              <OfferSale />
            </Route>
            <Route exact path="/about">
              <AboutPage/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;