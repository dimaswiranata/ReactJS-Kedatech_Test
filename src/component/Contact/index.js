import React from 'react'
import "./index.css";
import LogoBlue from "../../assets/logo/logo_blue.png";
import LogoMerah from "../../assets/logo/logo_merah.png";
import LogoOrange from "../../assets/logo/logo_orange.png";

function index({type}) {
  if (type === 'reachus'){
    return(
      <div className="Contact">
        <div className="Contact__Section">
          <img
            className="Contact__Logo"
            src={LogoBlue}
            alt="logo"
          />
          <text className="Contact__Title__One">REACH US</text>
        </div>
        <div className="Contact__Section__Text">
          <text className="Contact__Text">Please use the contact form on the rightside if you have any questions or request, concerning our services</text>
          <text className="Contact__Text">We will respond to your message within 24 Hours</text>
          <text className="Contact__Text">Below you can find a quick roadmap to get to our office</text>
        </div>
      </div>
    )
  }

  if (type === 'general'){
    return(
      <div className="Contact">
        <div className="Contact__Section">
          <img
            className="Contact__Logo"
            src={LogoMerah}
            alt="logo"
          />
          <text className="Contact__Title__Two">GENERAL</text>
        </div>
        <div className="Contact__Section__Text">
          <text className="Contact__Text">Digital Base BVBA</text>
          <table className="Product__Table">
            <tr>
              <td><text className="Product__Table__Content">Broekstreet</text></td>
            </tr>
            <tr>
              <td><text className="Product__Table__Content">J001 Leuven</text></td>
            </tr>
            <tr>
              <td><text className="Product__Table__Content">Belgium</text></td>
            </tr>
          </table>
          <table className="Product__Table">
            <tr>
              <td><text className="Product__Table__Content">Tel</text></td>
              <td><text className="Product__Table__Content">+32 016 36 00 36</text></td>
            </tr>
            <tr>
              <td><text className="Product__Table__Content">Fax</text></td>
              <td><text className="Product__Table__Content">+32 016 36 00 36</text></td>
            </tr>
            <tr>
              <td><text className="Product__Table__Content">Email</text></td>
              <td><text className="Product__Email">dimaswiranata8@gmail.com</text></td>
            </tr>
          </table>
          <table className="Product__Table">
            <tr>
              <td><text className="Product__Table__Content">TVA</text></td>
              <td><text className="Product__Table__Content">BE-0866.257.609</text></td>
            </tr>
            <tr>
              <td><text className="Product__Table__Content">BANK</text></td>
              <td><text className="Product__Table__Content">001-4305561-01</text></td>
            </tr>
            <tr>
              <td><text className="Product__Table__Content">IBANK</text></td>
              <td><text className="Product__Table__Content">BE43 0014 3055 6101</text></td>
            </tr>
            <tr>
              <td><text className="Product__Table__Content">BIC</text></td>
              <td><text className="Product__Table__Content">GEBABEBB</text></td>
            </tr>
          </table>
        </div>
      </div>
    )
  }

  if (type === 'mailus'){
    return(
      <div className="Contact">
        <div className="Contact__Section">
          <img
            className="Contact__Logo"
            src={LogoOrange}
            alt="logo"
          />
          <text className="Contact__Title__Three">MAIL US</text>
        </div>
        <div className="Contact__Section__Text">
          <text className="Contact__Text">Name</text>
          <input className="Contact__Input" type="text"/>
          <text className="Contact__Text">Email</text>
          <input className="Contact__Input" type="text"/>
          <text className="Contact__Text">Message</text>
          <input className="Contact__Input__Message" type="text"/>
          <button className="Contact__Button">Send</button>
        </div>
      </div>
    )
  }
}

export default index
