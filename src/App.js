import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Details from "./components/Details/Details";

function App() {
  const headerStyle = {
    fontSize: "40px",
    color: "goldenrod",
  };
  return (
    <div className="App container">
      <h1 style={headerStyle}>Fake Store</h1>
      <Header></Header>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Product">
            <Product></Product>
          </Route>
          <Route path="/ProductDetails/:id">
            <Details></Details>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
