import React from "react";
import Sideimg from "../Assets/Dashimage/vendorsidbar.svg";
import { BiLogOut } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { Colors } from "../Reusable/Color";

const Siderbar = () => {
  const side = [
    {
      Name: "Dashboard",
      Icon: <FaHome />,
      path: "/",
    },
    {
      Name: "Orders",
      Icon: <GoChecklist />,
      path: "orders",
    },
    {
      path: "menus",
      Name: "Menus",
      Icon: <MdOutlineDashboard />,
    },
  ];

  const sett = [
    {
      Name: "Settings",
      Icon: <FiSettings />,
      path: "settings",
    },
    {
      Name: "Logout",
      Icon: <BiLogOut />,
      path: "logout",
    },
  ];
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <img
          width="40px"
          style={{ paddingTop: "1.5rem" }}
          src={Sideimg}
          alt=""
        />
      </div>
      <section>
        {side.map((d) => {
          return (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={d?.path}
            >
              <div className="cons2">
                <div className="cons1">{d.Icon}</div>
                <div className="cons">{d.Name}</div>
              </div>
            </NavLink>
          );
        })}
      </section>

      <section style={{ borderTop: "1px solid #ccc" }}>
        {sett.map((s) => {
          return (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={s?.path}
            >
              <div className="cons2">
                <div className="cons1">{s.Icon}</div>
                <div className="cons">{s.Name}</div>
              </div>
            </NavLink>
          );
        })}
      </section>
    </Container>
  );
};

export default Siderbar;

const Container = styled.section`
  width: 220px;
  height: 100vh;
  background: white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
  section {
    padding: 1rem;
  }
  .active {
    text-decoration: none;
    background: ${Colors.PrimaryColor};
    width: 100%;
    padding: 10px;
    display: flex;
    color: ${Colors.white};
    font-weight: 500;
    border-radius: 0.3rem;
  }

  a {
    box-sizing: border-box;
    text-decoration: none;
    background: transparent;
    width: 100%;
    padding: 7px;
    font-weight: bold;
    display: flex;
    margin: 0.9rem 1rem 0.9rem 0rem;
    transition: linear 0.15s;
    font-size: 0.77rem;
  }
  .cons2 {
    display: flex;
    align-items: center;
  }
  .cons1 {
    font-size: 1.1rem;
    padding-right: 0.4rem;
    display: flex;
  }
`;
