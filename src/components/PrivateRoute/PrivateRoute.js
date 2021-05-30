// import React, { useContext } from "react";
// import { useSelector } from "react-redux";
// import { Redirect, Route } from "react-router-dom";
// import { UserContext } from "../../App";
// import { selectUserEmail } from "../../Redux/userSlice";
// // import { UserContext } from '../../App';

// const PrivateRoute = ({ children, ...rest }) => {
//   const email = useSelector(selectUserEmail);

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         email || localStorage.getItem("token") ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
