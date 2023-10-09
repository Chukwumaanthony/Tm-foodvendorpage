import React, { useState } from "react";
import { styled } from "styled-components";
import Liveorder from "../Overview/Liveorder";
import Overview from "../Overview/Overview";

const Dashboard = () => {
  const [overview, setOverview] = useState("overview");
  const [live, setLive] = useState(false);
  return (
    <Container>
      <div>
        <div className="Dbtn">
          <button
            onClick={() => {
              setOverview("overview");
              setLive(false);
            }}
            style={{
              background: overview === "overview" ? "#E1F2F9" : "",
              color: overview === "overview" ? "#48a5cb" : "",
            }}
          >
            Overview
          </button>
          <button
            onClick={() => {
              setLive("live");
              setOverview(false);
            }}
            style={{
              background: live === "live" ? "#E1F2F9" : "",
              color: live === "live" ? "#48a5cb" : "",
            }}
          >
            Live orders
          </button>
        </div>
        {overview && <Overview />}
        {live && <Liveorder />}
      </div>
    </Container>
  );
};

export default Dashboard;
const Container = styled.div`
  padding: 1rem;
  button {
    padding: 0.5rem;
    color: #777;
    background: white;
    border: none;
    outline: none;
    cursor: pointer;
    width: 6rem;
  }
  .Dbtn {
    border-bottom: 1px solid #ececec;
  }
`;
