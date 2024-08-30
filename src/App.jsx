import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { feature1, feature2, feature3 } from "../components/features.jsx";
import {
  Show1text,
  Show2text,
  Show3text,
  Show4text,
} from "../components/faq-text.jsx";

function App() {
  const [feature, setfeature] = useState(feature1);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(false);

  function changeFeature1() {
    setfeature(feature1);
  }
  function changeFeature2() {
    setfeature(feature2);
  }
  function changeFeature3() {
    setfeature(feature3);
  }

  return (
    <>
      <nav className="">
        <div className="nav-container">
          <a className="navbar-brand" href="#">
            <img src="../images/logo-bookmark.svg" alt="" />
          </a>
          <div className="nav-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  FEATURES
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  PRICING
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  CONTACT
                </a>
              </li>
            </ul>
            <button className="btn login-btn">LOGIN</button>
          </div>
        </div>
      </nav>
      <div className="hero">
        <div className="hero-left">
          <h2>A Simple Bookmark Manager</h2>
          <p>
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <button className="btn blue-button">Get it on Chrome</button>
          <button className="btn light-grey-button">Get it on Firefox</button>
        </div>
        <div>
          <img src="../images/illustration-hero.svg" alt="" />
        </div>
      </div>
      <div className="features">
        <h2>Features</h2>
        <p className="text-padding">
          Our aim is to make it quick and easy for you to access <br /> your
          favorite websites. Your boomarks sync between your <br /> devices so
          you can access the mon the go.
        </p>
        <div className="button-group">
          <button className="feat-button" onClick={changeFeature1}>
            Simple Bookmarking
          </button>
          <button className="feat-button" onClick={changeFeature2}>
            Speedy Searching
          </button>
          <button className="feat-button" onClick={changeFeature3}>
            Easy Sharing
          </button>
        </div>
        {feature}
      </div>
      <div className="transition">
        <h3>Download the Extension</h3>
        <p>
          We've got more browsers in the pipline. Please do le us know if you've
          got a favorite you'd like us to prioritize.
        </p>
      </div>
      <div className="extension">
        <div className="card">
          <img src="../images/logo-chrome.svg" alt="chrome extentsion" />
          <p>Add to Chrome</p>
          <p>Minimum version 62</p>
          <button className="btn btn-primary">Add & Install Extension</button>
        </div>
        <div className="card">
          <img src="../images/logo-firefox.svg" alt="chrome extentsion" />
          <p>Add to Firefox</p>
          <p>Minimum version 55</p>
          <button className="btn btn-primary">Add & Install Extension</button>
        </div>
        <div className="card">
          <img src="../images/logo-opera.svg" alt="chrome extentsion" />
          <p>Add to Opera</p>
          <p>Minimum version 46</p>
          <button className="btn btn-primary">Add & Install Extension</button>
        </div>
      </div>
      <div className="transition">
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered pelase feel free to email us
        </p>
      </div>
      <ul className="faq">
        <li>
          <button className="drop-btn" onClick={() => setshow1(!show1)}>
            <div className="drop-select">
            <h4>What is Bookmark?</h4>
            <img src="../images/icon-arrow.svg" alt="" />
            </div>
          </button>
          {show1 && <Show1text />}
        </li>
        <li>
          <button className="drop-btn" onClick={() => setshow2(!show2)}>
            <div className="drop-select">
              <h4>How can I request a new browser</h4>
              <img src="../images/icon-arrow.svg" alt="" />
            </div>
          </button>
          {show2 && <Show2text />}
        </li>
        <li>
          <button className="drop-btn" onClick={() => setshow3(!show3)}>
            <div className="drop-select">
              <h4>Is there a mobile app?</h4>
              <img src="../images/icon-arrow.svg" alt="" />
            </div>
          </button>
          {show3 && <Show3text />}
        </li>
        <li>
          <button className="drop-btn" onClick={() => setshow4(!show4)}>
            <div className="drop-select">
              <h4>What about other Chromium browsers?</h4>
              <img src="../images/icon-arrow.svg" alt="" />
            </div>
          </button>
          {show4 && <Show4text />}
        </li>
      </ul>
      <div className="faq-button">
      <button className="faq-moreinfo">More Info</button>
      </div>
      <div className="contact">
        <p>35,000+ ALREADY JOINED</p>
        <h3>Stay up-to-date with what we're doing</h3>
        <form action="" className="form-style form-floating ">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email Address</label>
          <button className="btn">Contact Us</button>
        </form>
      </div>
      <footer className="footer">
        <nav className="footer-nav">
          <img src="../images/logo-bookmark.svg" alt="bookmark logo" />
          <div>
            <ul className="navbar-nav footer-navbar">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  FEATURES
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  PRICING
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-icons">
            <img src="../images/icon-twitter.svg" alt="twitter" />
            <img src="../images/icon-facebook.svg" alt="" />
          </div>
        </nav>
      </footer>
    </>
  );
}

export default App;
