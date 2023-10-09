import React from "react";
// import { BiLock } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import styled from "styled-components";
import Tmlogo from "../Assets/Logsimg/Tmlogo.svg";
import { Link } from "react-router-dom";
const Logs = () => {
  return (
    <Container>
      <div className="logscont">
        <img src={Tmlogo} alt="" />
        <div className="vendor-portal">Forgot Password</div>
        <div className="manage">
          Please enter your email address and a reset link will be sent to the
          email provided
        </div>

        <section>
          <label htmlFor="Mail"> Email Address</label>
          <div className="input-field">
            <div className="log-icon">
              <FiMail />
            </div>
            <input type="email" id="Mail" />
          </div>
        </section>
        <Link className="link" to="/otp">
          <button>Proceed</button>
        </Link>
        <Link to="/login" className="forgot">
          Back to login
        </Link>
      </div>
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
    color: #404040;
    font-weight: 600;
    font-size: 19px;
    padding-top: 0.5rem;
  }
  label {
    font-size: 14px;
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
  button {
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
  .link {
    padding-top: 3rem;
    width: 100%;
  }
  .forgot {
    color: #777;
    padding-block: 1rem;
    cursor: pointer;
  }
  .not-vend {
    color: white;
    padding-block: 1rem;
  }
`;
