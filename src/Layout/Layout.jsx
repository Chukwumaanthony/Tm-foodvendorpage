import React from "react";
import { Outlet } from "react-router-dom";
import Siderbar from "./Vendside";
import Navbar from "./Nav";
import { styled } from "styled-components";
// import Siderbar from "./Vendside";
// import Siderbar from "../Layout/Siderbar";

const Layout = () => {
  return (
    <Div1>
      <Siderbar />

      <div
        style={{
          width: "calc(100% - 220px)",
          height: "100vh",
        }}
      >
        <div style={{ height: "fit-content" }}>
          <Navbar />
        </div>
        <main className="scroll">
          <Outlet />
        </main>
      </div>
    </Div1>
  );
};

export default Layout;
const Div1 = styled.section`
  display: flex;
  .scroll {
    height: auto;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
