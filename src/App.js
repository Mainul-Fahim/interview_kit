import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
// import Error from "./components/Error/Error";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { selectUserEmail } from "./Redux/userSlice";

function App() {
  const userEmail = useSelector(selectUserEmail);

  return (
    <>
      <Router>{userEmail ? <Home /> : <Login />}</Router>
    </>

    // <Router>
    //   <Switch>
    //     <Route exact path="/">

    //     </Route>
    //     <Route path="/home">
    //       <Home />
    //     </Route>
    //     <Route path="/login">

    //     </Route>
    //     <Route path="*">
    //       <Error />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
