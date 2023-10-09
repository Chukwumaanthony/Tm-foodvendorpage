import React, { useState } from "react";
// import { BiLock } from "react-icons/bi";
import OtpInput from "otp-input-react";

import styled from "styled-components";
import Tmlogo from "../Assets/Logsimg/Tmlogo.svg";
import { Link } from "react-router-dom";
const Logs = () => {
  const [otp, setOtp] = useState("");

  return (
    <Container>
      <div className="logscont">
        <img src={Tmlogo} alt="" />
        <div className="vendor-portal">Enter the OTP sent to your Email</div>

        <OtpInput
          value={otp}
          onChange={setOtp}
          OTPLength={5}
          otpType="number"
          disabled={false}
          inputStyle="otp"
          autoFocus
          className="otp"
        ></OtpInput>

        <Link className="link" to="/reset">
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
  .otp {
    padding-block: 4rem;
  }

  .otp input {
    outline: none;
    font-weight: 500;
    border-radius: .2rem;
    border: 1px solid #36aad9;
    font-size: 20px;
  }
  .logscont {
    background: white;
    border-radius: 1rem;
    padding: 1rem;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .vendor-portal {
    color: #48a5cb;
    font-weight: 600;
    font-size: 19px;
    padding-top: 0.5rem;
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
    padding-top: 1rem;
    width: 100%;
  }
  .forgot {
    color: #777;
    padding-block: 1rem;
    cursor: pointer;
  }
`;
