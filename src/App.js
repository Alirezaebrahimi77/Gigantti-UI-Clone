import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="w-full h-100 bg-gigYellow">
        <div className="max-w-7xl mx-auto shadow-2xl">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
              <Route path="/search">Search</Route>
            </Switch>
            <Footer />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
