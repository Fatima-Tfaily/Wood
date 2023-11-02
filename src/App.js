import "./App.css";
import Home from "./components/HomePage";
import ArabeHome from "./components/ArabeHome";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ArabeHome" component={ArabeHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
