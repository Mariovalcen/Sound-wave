import "../Main/Main.css"
import girl from "../../Assets/Images/landing-page-girl.png"
import React from "react";
import { Link } from "react-router-dom";
function Main (){
    return(
        <>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="box-circle">
            <div className="circle3">
    
            </div>
        </div>

        <div className="main-general">
            <div className="container-girl-image">
                <div className="chica">
            <img className="picture-girl" alt="" src={girl}></img>
            </div>

            </div>

            <div className="main-description">
                <div>
                    <h2>Feel the Music</h2>
                </div>
                <div>
                    <h3>Stream over 20 thousand songs with one click</h3>
                </div>
                <div className="container-button">
                <Link to="Join"> 
                <a href="#" class="myButton">Join Now</a>
                </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Main;