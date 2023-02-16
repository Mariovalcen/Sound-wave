import "../Join/Join.css";
import React from "react";
import Footer from "../Footer/Footer";

export const Join = () => {
  return (
    <>
      <div className="box-circle1-join">
        <div className="circle1-join"></div>
      </div>
      <div className="box-circle2-join">
        <div className="circle2-join"></div>
      </div>
      <div className="join-container">
        <div className="join-text">
          <h2>Join the fun</h2>
        </div>
        <div className="client-information">
          <div className="box-client">
            <div className="datos">
              <p>Name:</p>
              <input type="email" size="50"></input>
            </div>
            <div className="datos">
              <p>Email:</p>
              <input type="email" size="50"></input>
            </div>
            <div className="datos">
              <p>Password:</p>
              <input type="password" size="50"></input>
            </div>
            <div>Join now</div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Join;
