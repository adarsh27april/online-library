import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";

import Register from "./pages/register/Register";

import Home from "./pages/Home/Home.jsx";
import Product from "./components/Product";
import MyBooks from "./components/MyBooks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import PdfViewer from "./PdfViewer";
import Menu from "./components/Menu";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Router>
        <div style={{ paddingTop: "120px" }}>
          <Menu />
        </div>
        <Switch>
          <Route exact path="/">
            {/* for rendering home page */}
            <Home />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>

          <Route path="/profile">
            {user ? <Profile /> : <Redirect to="/" />}
          </Route>

          <Route path="/myBooks">
            {user ? <MyBooks /> : <Redirect to="/" />}
          </Route>

          <Route path="/products/:productId" component={Product} exact />

          <Route path="/pdfviewer">
            <PdfViewer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
