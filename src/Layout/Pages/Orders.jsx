import React, { useState } from "react";
import Live from "../Orders/Liveorders";
import Ords from "../Orders/Ords";
import { styled } from "styled-components";

const Orders = () => {
  const [liveorder, setLiveorder] = useState(true);
  const [order, setOrder] = useState();
  return (
    <Div1>
      <div>
        <button
          className="bott"
          onClick={() => {
            setLiveorder(true);
            setOrder(false);
          }}
          style={{
            color: liveorder ? "#48a5cb" : "",
            borderBottom: liveorder ? " 2px solid #48a5cb" : "",
          }}
        >
          Live Orders
        </button>
        <button
          className="bott"
          onClick={() => {
            setOrder(true);
            setLiveorder(false);
          }}
          style={{
            color: order ? "#48a5cb" : "",
            borderBottom: order ? " 2px solid #48a5cb" : "",
          }}
        >
          Orders
        </button>
      </div>
      {liveorder && <Live />}
      {order && <Ords />}
    </Div1>
  );
};

export default Orders;
const Div1 = styled.div`
  padding: 1rem;
  .bott {
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 2px solid #7777;
    color: #7777;
  }
`;
