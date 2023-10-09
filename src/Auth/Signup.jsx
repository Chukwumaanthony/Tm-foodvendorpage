import React from "react";
import logo from "../Assets/Logsimg/Tmlogo.svg";
import { styled } from "styled-components";
import mail from "../Assets/Logsimg/mail.svg";
import buss from "../Assets/Logsimg/name.svg";
import browser from "../Assets/Logsimg/browser.svg";
import padlock from "../Assets/Logsimg/padlock.svg";
import telephone from "../Assets/Logsimg/telephone.svg";
import niger from "../Assets/Logsimg/nigeria.svg";
import placeholder from "../Assets/Logsimg/placeholder.svg";
import signup from "../Assets/Logsimg/signup.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Div>
      <div className="first">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="a-vend">Become a Vendor</div>
      </div>
      <section className="sect">
        <div className="optimize">
          <span className="manage">
            Optimize your sales and manage <br /> your orders
          </span>
          <span className="store">
            Manage your store in well organized way. Here you can maximize your
            performance and improve the custormer experience{" "}
          </span>
          <div className="blues">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingBottom: "10px",
              }}
            >
              <span
                style={{
                  color: "#36aad9",
                  fontSize: "19px",
                  fontWeight: "600",
                }}
              >
                Start selling with TM30 food platform{" "}
              </span>
              <span className="store">Become a vendor </span>
            </div>
            <div className="holder">
              <section className="holds">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                  }}
                >
                  <label htmlFor="mail">Email</label>
                  <div className="div-input">
                    <img src={mail} alt="" />
                    <input id="mail" type="text" />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                  }}
                >
                  <label htmlFor="domain ">Vendor domain name (optional)</label>
                  <div className="div-input">
                    <img src={browser} alt="" />
                    <input id="domain" type="text" />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                  }}
                >
                  <label htmlFor="buss">Business name</label>
                  <div className="div-input">
                    <img src={buss} alt="" />
                    <input id="buss" type="text" />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                  }}
                >
                  <label htmlFor="add">Business address</label>
                  <div className="div-inputs">
                    <img src={placeholder} alt="" />
                    <input id="add" type="text" />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                  }}
                >
                  <label htmlFor="phone">Phone number</label>
                  <div className="div-input">
                    <img src={telephone} alt="" />
                    <input id="phone" type="text" />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                  }}
                >
                  <label htmlFor="pass">Password</label>
                  <div className="div-input">
                    <img src={padlock} alt="" />
                    <img src={niger} alt="" />
                    <input id="pass" type="text" />
                  </div>
                </div>

                <div className="check-platform">
                  <input className="check" type="checkbox" />
                  <span className="platform">
                    I accept to recieve update from TM30 food platform
                  </span>
                </div>
                <div className="check-platform">
                  <input className="check" type="checkbox" />
                  <span className="platform">I accept the privacy policy</span>
                </div>
                <button
                  style={{
                    padding: ".5rem",
                    color: "white",
                    outline: "none",
                    border: "none",
                    background: "#36aad9",
                    borderRadius: ".5rem",
                  }}
                >
                  Get Started
                </button>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "13px",
                  }}
                >
                  Already a vendor? <Link to="/login"> Log in</Link>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="signs">
          <img src={signup} alt="" />
        </div>
      </section>
    </Div>
  );
};
//
export default Signup;

const Div = styled.div`
  .signs {
    padding-block: 3rem;
  }
  .signs img {
    width: 400px;
  }
  .check-platform {
    display: flex;
    font-size: 13px;
    alignt-items: center;
  }
  .div-inputs {
    display: flex;
    align-items: start;
    border: 1px solid #7777;
    width: 20rem;
    height: 3rem;
    padding: 0.3rem;
    border-radius: 0.5rem;
  }
  .div-inputs input {
    height: 2rem;
    border: none;
    width: 90%;
    padding: 0.2rem;
    outline: none;
  }
  .div-input {
    gap: 5px;
    display: flex;
    align-items: center;
    border: 1px solid #d3d3d3;
    width: 20rem;
    padding: 0.3rem;
    border-radius: 0.5rem;
  }
  label {
    font-size: 14px;
    color: #a7a7a7;
  }
  .div-input input {
    border: none;
    width: 90%;
    padding: 0.2rem;
    outline: none;
  }
  .blues {
    padding-block: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    border-radius: 1rem;
    height: 25rem;
    border: 2px solid #36aad9;
  }
  ::-webkit-scrollbar {
    width: 0.3rem;
    background-color: #7777;
    border-radius: 0.5rem;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .sect {
    display: flex;
    justify-content: space-between;
    padding: 1rem 8rem;
  }
  .store {
    font-size: 14.5px;
    color: #a7a7a7;
  }
  .manage {
    font-weight: 600;
    font-size: 23px;
  }
  .optimize {
    display: flex;
    flex-direction: column;
    width: 40%;
  }
  .first {
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: space-between;
    height: 20%;
    background: #fff;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  }
  .a-vend {
    border: 1px solid black;
    padding: 8px 12px;
    border-radius: 0.9rem;
  }
  .holder {
    display: flex;
    overflow: hidden;
    overflow-y: scroll;
    padding: 1rem 2.5rem;
    flex-direction: column;
    gap: 10px;
  }
  .holds {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
