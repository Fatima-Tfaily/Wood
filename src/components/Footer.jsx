import React, { useState } from "react";
import "../styles/footer.css";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import tiktok from "../images/tiktok.svg";
import whatsapp from "../images/whatsapp.svg";

const redirectToFacebook = () => {
  window.open(
    "https://www.facebook.com/profile.php?id=100081343031719&mibextid=ZbWKwL",
    "_blank"
  );
};

const redirectToInstagram = () => {
  window.open(
    "https://instagram.com/hassan_chehaitle?igshid=OGQ5ZDc2ODk2ZA==",
    "_blank"
  );
};

const redirectToTiktok = () => {
  window.open(
    "https://www.tiktok.com/@hasan.chehaitly?_t=8gza2PLnFmE&_r=1",
    "_blank"
  );
};

const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState("81815087");
  const link = `https://wa.me/${phoneNumber}`;

  const openChat = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="footer">
      <div className="Footer">
        <div className="Social">
          <h1 className="sous_title">Social Media</h1>
          <ul className="ul-footer">
            <li className="li-footer">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToFacebook();
                }}
              >
                <img src={facebook} className="footer_img" />
                <p>Hassan Chehaitly</p>
              </a>
            </li>
            <li className="li-footer">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToInstagram();
                }}
              >
                <img src={instagram} className="footer_img" />
                <p>hassan_chehaitle</p>
              </a>
            </li>
            <li className="li-footer">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToTiktok();
                }}
              >
                <img src={tiktok} className="footer_img" />
                <p> hasan chehaitly</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h1 className="sous_title">Contact Me</h1>
          <ul className="ul-footer">
            <li className="li-footer">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openChat();
                }}
              >
                <img src={whatsapp} className="footer_img" />
                <p>81815087</p>
              </a>
            </li>
            <br />
          </ul>
        </div>
      </div>
      <div className="made">Made by Fatima Tfaily 71153332</div>
    </div>
  );
};

export default Footer;
