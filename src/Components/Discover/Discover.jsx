import "./Discover.css";
import React from "react";
import covers from "../../Assets/Images/covers.jpg";
import microphone from "../../Assets/icons/microphone.svg";
import albums from "../../Assets/icons/albums.svg";
import more from "../../Assets/icons/more.svg";
import Footer from "../Footer/Footer";

export const Discover = () => {
  return (
    <div className="discover-contain">
      <div className="description-contain">
        <div>
          <h2> Discover new music</h2>
        </div>
        <div className="contain-icons">
          <div className="icon">
            <img alt="" src={microphone}></img>
            <p>Charts</p>
          </div>
          <div className="icon">
            <img alt="" src={albums}></img>
            <p>Album</p>
          </div>
          <div className="icon">
            <img alt="" src={more}></img>
            <p>More</p>
          </div>
        </div>
        <div>
          <h3>
            By joining you can benefit by listening to the latest albums
            released.
          </h3>
        </div>
      </div>
      <div className="image-contain">
        <img className="covers" alt="" src={covers}></img>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Discover;
