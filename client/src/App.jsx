import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";
import { FiSearch } from 'react-icons/fi';
import { FaShieldHalved } from "react-icons/fa6";
import { LiaUserClockSolid } from "react-icons/lia";

import Lawyerinfo from './components/Lawyerinfo'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

var input = document.getElementById("myinput");

if(input) {
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submitbtn").click();
  }
});
}

const providers = [
  " Advocates",
  " Document Writers",
  " Mediators",
  " Arbitrators",
  " Legal Consultants",
];

export default function App({hide1}) {
  const navigate = useNavigate();
  const handleSubmit = (event) => { 
    navigate("/search")
  }
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        return prevIndex + 1 < providers.length ? prevIndex + 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  });
  
  const resetState = () => {
    setIndex(0);
  };
  return (
    <main className="main-container">
    <div className="top-section">
      <Navbar hide1={hide1}/>
    </div>
    <div className="section-1 section">
      <div className="left-container">
        <h1 className="slogan">
          Connecting you to Trusted Legal Experts in India
        </h1>
        <p className="sub-heading">
          Your gateway to a simplified and efficient legal experience.
        </p>
        <Link to='/getting-started/join' className="btn btn-primary get-started">
          Get started
        </Link>
      </div>

      <div className="right-container">
        <img src="/law.svg" className="hero-img" />
      </div>
    </div>

    <div className="section-2 section">
      <h1 className="heading">
        Find the top
        <span className="sliding-text"> {providers[index]} </span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            id="myinput"
          ></input>
          <input type='submit' id='submitbtn' style={ {visibility: "hidden"} }></input>
              
        </div>
      </form>
      <div id="myDropdown" className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select City
        </button>
        <ul className="dropdown-menu">
          <li>
            <input
              type="text"
              placeholder="Search.."
              id="input"
              // onChange={handleChange}
            />
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div id="myDropdown" className="dropdown">
        <button
          className="btn btn-white dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Area
        </button>
        <ul className="dropdown-menu">
          <li>
            <input
              type="text"
              placeholder="Search.."
              id="lolinput"
              // onChange={handleChange}
            />
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="section-3 section">
      <h1 className="heading">Top rated Advocates in India</h1>
      <div className="grid-container">
        <Lawyerinfo name="Rishi Raam" star="4.6" exp="14" />
        <Lawyerinfo name="Thilakarajan" star="4.1" exp="10" />
        <Lawyerinfo name="Ram Prathap" star="4.4" exp="8" />
        <Lawyerinfo name="Sharmila" star="3.9" exp="12" />
      </div>
    </div>

    <div className="section-4 section">
      <div className="left-container">
        <img src="/features.svg" className="feature--img" />
      </div>
      <div className="right-container">
        <h1 className="heading feature--heading">
          Elevate Your Legal Experience, Effortlessly
        </h1>
        <FaPenToSquare className="feature--icon" />
        <h2 className="feature--subheading">No cost to join</h2>
        <p className="feature--paragraph">
          Committed to Universal Access to Quality Legal Services.
        </p>
        <FaShieldHalved className="feature--icon" />
        <h2 className="feature--subheading">Transparent and Reliable</h2>
        <p className="feature--paragraph">
          Rest assured with a transparent rating and review system.
        </p>
        <LiaUserClockSolid className="feature--icon" />
        <h2 className="feature--subheading">Expertise Meets Convenience</h2>
        <p className="feature--paragraph">
          Effortlessly access legal expertise, anytime, anywhere.
        </p>
        <a className="btn btn-primary">Sign up for free</a>
        <a className="btn btn-white">Learn more</a>
      </div>
    </div>

    <div className="section section-5">
      <h1 className="heading">Popular IPC Sections</h1>
      <div className="grid-container--2">
        <div className="learn--card">
          <h1 className="learn--heading">
            209-Dishonestly making false claim in Court
          </h1>
          <p className="learn--content">
            According to section 209 of Indian penal code, Whoever
            fraudulently or dishonestly, or with intent to injure or annoy any
            person, makes in a Court of Justice any claim which he knows to be
            false, shall be punished with imprisonment of either description
            for a term which may extend to two years, and shall also be liable
            to fine.
          </p>
        </div>
        <div className="learn--card">
          <h1 className="learn--heading">
            209-Dishonestly making false claim in Court
          </h1>
          <p className="learn--content">
            According to section 209 of Indian penal code, Whoever
            fraudulently or dishonestly, or with intent to injure or annoy any
            person, makes in a Court of Justice any claim which he knows to be
            false, shall be punished with imprisonment of either description
            for a term which may extend to two years, and shall also be liable
            to fine.
          </p>
        </div>
        <div className="learn--card">
          <h1 className="learn--heading">192-Fabricating false evidence</h1>
          <p className="learn--content">
            Section 192 of the Indian Penal Code defines "fabricating false
            evidence" as causing false information to be present in a record
            or document with the intention that it may be used in a judicial
            or legal proceeding, leading to a wrong conclusion.
          </p>
        </div>
      </div>
      <a className="btn btn-white learn-btn">Learn more</a>
    </div>
    <Footer />
  </main>
  );
}

