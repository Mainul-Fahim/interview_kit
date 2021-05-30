import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  selectUserProfile,
  setActiveUser,
  setUserLogOutState,
} from "../../Redux/userSlice";
import { useHistory, useLocation } from "react-router";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userProfile = useSelector(selectUserProfile);

  const history = useHistory();
  const location = useLocation();
  // const [error, setError] = useState({});

  let { from } = location.state || { from: { pathname: "/" } };

  // sign in
  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
          userProfile: result.user.photoURL,
        })
      );
      history.replace(from);
    });
  };
  //sign out
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="my-2 text-center">Welcome to Interview_Kit</h2>
        <div className="login-image col-md-6 col-sm-12">
          <img
            className="image-fluid w-100 h-100"
            src="https://i.ibb.co/BgrgBn4/53395-login.gif"
            alt="login_image"
          />
        </div>
        <div className="login-btn col-md-4 col-sm-12 text-center">
          <h4 className="mb-5">Login With your google account</h4>
          <button className="btn btn-primary" onClick={handleSignIn}>
            {" "}
            <FontAwesomeIcon icon={faGoogle} /> Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
