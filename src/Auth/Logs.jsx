import React, { useState } from "react";
import { BiLock } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import styled from "styled-components";
// import loads from "../Animations/anime.svg";
import Tmlogo from "../Assets/Logsimg/Tmlogo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Logs = () => {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [loading, setLoading] = useState(false);

  const handleShow = () => {
    setShow(!show);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();
  const authenticateUser = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: email,
        password: password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://89.38.135.41:7654/api/auth/authenticate",
        requestOptions
      );
      const result = await response.json();
      console.log(result.data);
      console.log(result.data.accessToken);
      localStorage.setItem("token", result.data.accessToken);

      if (result.status) {
        setTimeout(() => {
          Navigate("/");
        }, 2000);
        // console.log(result)
        sessionStorage.setItem("vendorDetails", JSON.stringify(result));
      }
      setMessage(result.data.message);
      console.log(result.status);
      console.log(message);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    authenticateUser();
  };
  return (
    <Container>
      <div onSubmit={handleSubmit} className="logscont">
        <img src={Tmlogo} alt="" />
        <div className="vendor-portal">Vendor Portal</div>
        <div className="manage">
          Manage your store,edit your menu and get to understand how to grow
          your business
        </div>

        <section>
          <label htmlFor="Mail"> Email Address</label>
          <div
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="input-field"
          >
            <div className="log-icon">
              <FiMail />
            </div>
            <input type="email" id="Mail" />
          </div>
          <label htmlFor="pass"> Password</label>
          <div
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input-field"
          >
            <div className="log-icon">
              <BiLock />
            </div>
            <input type={inputType} id="pass" />
            <button className="eyes" onClick={handleShow}>
              {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        </section>
        <div className="link" onClick={handleSubmit}>
          <button className="logs">{loading ? "Loading..." : "Log in"}</button>
        </div>
        <Link to="/forget" className="forgot">
          Forgot the password?
        </Link>
      </div>
      <Link to="/signup" className="not-vend">
        Not a vendor yet? Sign up
      </Link>
    </Container>
  );
};

export default Logs;

const Container = styled.section`
  background: #48a5cb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  .logscont {
    background: white;
    border-radius: 1rem;
    padding: 1rem;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .manage {
    text-align: center;
    padding-top: 0.5rem;
    color: #777;
  }
  .vendor-portal {
    font-weight: 600;
    font-size: 19px;
    padding-top: 0.5rem;
  }
  label {
    color: rgba(0, 0, 0, 0.5);
    line-height: 2rem;
  }
  section {
    padding-block: 1rem;
    width: 100%;
  }
  .input-field {
    border: 1px solid rgba(58, 58, 58, 0.3);
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
  }
  input {
    width: 85%;
    outline: none;
    border: none;
    padding: 0.5rem;
  }
  .log-icon {
    width: 10%;
    display: flex;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.5);
    justify-content: center;
  }
  .logs {
    background: #48a5cb;
    color: white;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    padding: 0.7rem;
    cursor: pointer;
    width: 100%;
    justify-content: center;
  }
  .eyes {
    border: none;
    outline: none;
    font-size: 16px;
    display: flex;
    background: transparent;
  }
  .link {
    width: 100%;
  }
  .forgot {
    padding-block: 1rem;
    cursor: pointer;
  }
  .not-vend {
    color: white;
    padding-block: 1rem;
  }
`;
