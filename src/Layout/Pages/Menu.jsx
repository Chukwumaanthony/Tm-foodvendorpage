import React, { useState } from "react";
import Newmenu from "../Menu/Newmenu";
import Menulist from "../Menu/Menulist";
import { styled } from "styled-components";

function Menu() {
  const [newmenu1, setNewmenu1] = useState(true);
  const [menulist1, setMenulist1] = useState(false);
  return (
    <Cont>
      <div>
        <button
          className="bott"
          onClick={() => {
            setNewmenu1(true);
            setMenulist1(false);
          }}
          style={{
            color: newmenu1 ? "#48a5cb" : "",
            borderBottom: newmenu1 ? " 2px solid #48a5cb" : "",
          }}
        >
          {" "}
          Add new menu
        </button>
        <button
          className="bott"
          onClick={() => {
            setMenulist1(true);
            setNewmenu1(false);
          }}
          style={{
            color: menulist1 ? "#48a5cb" : "",
            borderBottom: menulist1 ? " 2px solid #48a5cb" : "",
          }}
        >
          {" "}
          Menu list
        </button>

        {newmenu1 && <Newmenu />}
        {menulist1 && <Menulist />}
      </div>
    </Cont>
  );
}

export default Menu;

const Cont = styled.div`
  height: 100%;
  background: #f6f6f6;
  padding: 1rem;
  .bott {
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 2px solid #7777;
    color: #7777;
  }
`;
