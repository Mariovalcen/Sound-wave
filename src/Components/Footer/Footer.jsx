import "../Footer/Footer.css"
import facebook from "../../Assets/icons/facebook.svg"
import twitter from "../../Assets/icons/twitter.svg"
import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer>
          <div className="contact">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
          <div className="redes">
          <img src={twitter} alt=""></img><p> Twitter </p>
          <img src={facebook} alt=""></img><p> Facebook </p>
          </div>
        </footer>
    </>
  )
}

export default Footer;