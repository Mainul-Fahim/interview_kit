import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Error = () => {
  const backHome = () => window.history.back();
  return (
    <div className="container  my-5 text-center text-black">
      <h3 className="text-black">404, This page is not found </h3>
      <hr />
      <i>Please try Again</i>
      <br />
      <button onClick={backHome} className="btn btn-info" to="/">
        <FontAwesomeIcon className="mr-2" icon={faArrowLeft} /> Back to home{" "}
      </button>
    </div>
  );
};

export default Error;
