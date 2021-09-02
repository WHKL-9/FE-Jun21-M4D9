import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WarningSign from './components/WarningSign'
// import MyBadge from './components/MyBadge'
// import SingleBook from './components/SingleBook'
import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import fantasyBooks from "./fantasyBooks.json";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => (
              <BookList {...routerProps} books={fantasyBooks} />
            )}
          />
          <Route
            path="/Home"
            exact
            render={(routerProps) => (
              <BookList {...routerProps} books={fantasyBooks} />
            )}
          />
          <Route
            path="/Login"
            exact
            render={(routerProps) => (
              <Login {...routerProps} />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
