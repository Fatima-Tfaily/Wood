import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import "../styles/about.css";
import "../styles/header.css";
import "../styles/work.css";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import image14 from "../images/image14.jpg";
import image15 from "../images/image15.jpg";
import image16 from "../images/image16.jpg";
import video1 from "../images/video1.mp4";
import video2 from "../images/video2.mp4";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import tiktok from "../images/tiktok.svg";
import whatsapp from "../images/whatsapp.svg";

const ArabeHome = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

  const nextSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };
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
  const prevSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };
  const [phoneNumber, setPhoneNumber] = useState("81815087");
  const link = `https://wa.me/${phoneNumber}`;

  const openChat = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="ArabeHome">
      <div className="header">
        <div className="Amenu">
          <a href="#">
            <Link to="/">ترجمة</Link>
          </a>
        </div>
        <div className="Alogo">الفنان حسن شحيتلي</div>
      </div>
      <div className="About">
        <h1 className="title">سيرة ذاتية</h1>
        <div className="about">
          <div className="image">
            <img className="img" src={image5} />
          </div>
          <div className="content">
            <p>
              المصمم اللبناني النادر في جمع الماضي والحاضر بأدق التصميم والوقت
              والتمييز الفنان حسن شحيتلي لمن يهمه الأمر خارجي 81815087
            </p>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <h1 className="title">اعمالي</h1>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide ${index}`}
            className={`slider-image ${index === currentImage ? "active" : ""}`}
          />
        ))}
        <button className="prev-btn" onClick={nextSlide}>
          {"<"}
        </button>
        <button className="next-btn" onClick={prevSlide}>
          {">"}
        </button>
      </div>
      <div className="Vwork">
        <h1 className="title">فيديو</h1>
        <div display="flex" flex-direction="row">
          <div className="video">
            <video className="Video" controls muted>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
          <div className="video">
            <video className="Video" controls muted>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default ArabeHome;
