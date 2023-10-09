import React, { useState } from "react";
import { BsToggleOn } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import Mama from "../Assets/Dashimage/Mamaj.svg";
import person from "../Assets/Dashimage/person.svg";
import wave from "../Assets/Dashimage/wave.svg";
import { styled } from "styled-components";
import { BiLogOut } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [drop, setDrop] = useState(false);

  const toggleDown = () => {
    setDrop(!drop);
  };

  return (
    <Container>
      <section className="Dnav">
        <div className="mama-j">
          <div className="Imgs">
            <img width="45px" src={Mama} alt="" />
          </div>

          <div className="hello">
            <span className="Bukka">Mama J Bukka</span>
            <span className="wave">
              Hello <img src={wave} alt="" />
            </span>
          </div>
        </div>
        <div className="mama-j">
          <div className="stats">
            <div className="Bukka">Store status</div>
            <div className="waves">
              <span className="toggle">
                <BsDot /> <span style={{ fontSize: "14px" }}> Open</span>
              </span>
              <span className="toggle">
                <BsToggleOn />
              </span>
            </div>
          </div>
          <section className="togs">
            <div onClick={toggleDown} className="Imgs">
              <img width="45px" src={person} alt="" />
              <div className="arrow-down">
                {drop ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
              </div>
            </div>
            {drop && (
              <div className="dropss">
                <section
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "1rem",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    Vendor
                  </span>
                  <span style={{ fontSize: "11px" }}>
                    Mamaj Bukka@gmail.com
                  </span>
                </section>
                <section
                  style={{
                    display: "flex",
                    gap: ".3rem",
                    borderBlock: "1px solid #e6e6e6",
                    fontSize: "13px",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                >
                  <FiSettings />
                  <Link to="settings">Settings</Link>
                </section>
                <section
                  style={{
                    display: "flex",
                    color: "#d04747",
                    gap: ".3rem",
                    fontSize: "13px",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                >
                  <BiLogOut />
                  <Link
                    to="login"
                    style={{
                      color: "#d04747",
                    }}
                  >
                    Logout
                  </Link>
                </section>
              </div>
            )}
          </section>
        </div>
      </section>
    </Container>
  );
};

export default Nav;
const Container = styled.section`
  position: relative;
  font-size: 15px;
  font-weight: 500;
  background: #fff;
  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.1);
  .dropss {
    background: white;
    border-radius: 0.3rem;
    position: absolute;
    top: 100px;
    right: 20px;
    box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.1);
  }
  .Dnav {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
  }
  .mama-j {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .hello {
    display: flex;
    flex-direction: column;
  }
  .wave {
    gap: 10px;
    display: flex;
    font-size: 14px;
    align-items: center;
  }
  .waves {
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
  }
  .Bukka {
    font-weight: 600;
  }
  .Imgs {
    display: flex;
    align-items: center;
  }
  .toggle {
    color: #078c1c;
    font-size: 17px;
    display: flex;
    align-items: center;
  }
  .stats {
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid rgba(119, 119, 119, 0.25);
  }
  .arrow-down {
    display: flex;
    font-size: 1rem;
  }
`;
