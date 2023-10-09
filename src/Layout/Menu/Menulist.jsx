import React, { useState } from "react";
import circs from "../../Assets/Menuimage/Whiterice.svg";
import onoff from "../../Assets/Menuimage/onoff.svg";
import on from "../../Assets/Menuimage/off.svg";
import sort from "../../Assets/Orderimage/sorting.svg";
// import Menul from "../Menu/Newmenu";
import { styled } from "styled-components";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import Newmenu from "./Newmenu";

const Menulist = () => {
  const [id, setId] = useState();
  const [no, setNo] = useState();
  const [view, setView] = useState(true);
  const mappedtb = [
    {
      Name: "White Rice",
      Nom: "738",
      percent: "7%",
      Date: "13th July,2023",
      categories: "Rice",
      value: 50,
      img: circs,
      image: onoff,
      off: on,
      id: 1,
    },
    {
      Name: "White Rice",
      Nom: "738",
      percent: "7%",
      Date: "13th July,2023",
      categories: "Rice",
      value: 80,
      img: circs,
      image: onoff,
      off: on,
      id: 2,
    },
    {
      Name: "White Rice",
      Nom: "738",
      percent: "7%",
      Date: "13th July,2023",
      categories: "Rice",
      value: 65,
      img: circs,
      off: on,
      image: onoff,
      id: 3,
    },
    {
      Name: "Pasta",
      Nom: "738",
      percent: "7%",
      Date: "13th July,2023",
      categories: "Pasta",
      value: 42,
      img: circs,
      off: on,
      image: onoff,
      id: 4,
    },
    {
      Name: "Hot Bread",
      Nom: "738",
      percent: "7%",
      Date: "13th July,2023",
      categories: "Breakfast",
      value: 80,
      img: circs,
      off: on,
      image: onoff,
      id: 5,
    },
    {
      Name: "Beans",
      Nom: "738",
      percent: "7%",
      Date: "13th July,2023",
      categories: "Beans",
      value: 60,
      img: circs,
      off: on,
      image: onoff,
      id: 6,
    },
    {
      Name: "White Rice",
      Nom: "738",
      percent: "7%",
      Date: "13th July,2023",
      categories: "Rice",
      value: 57,
      img: circs,
      off: on,
      image: onoff,
      id: 7,
    },
    {
      Name: "White Rice",
      Nom: "738",
      percent: "7%",
      Date: "13th July,2023",
      categories: "Rice",
      value: 70,
      img: circs,
      off: on,
      image: onoff,
      id: 8,
    },
  ];
  const maps = [
    "Item",
    "Rating by Order",
    "Update Date",
    "Menu Categories",
    "Available Status",
    "Edit",
  ];
  return (
    <div>
      {view ? (
        <Div1>
          <table>
            <thead>
              {maps.map((m, i) => (
                <th style={{}} className="header" key={i}>
                  <div style={{ display: "flex", paddingBlock: ".5rem" }}>
                    {m} <img width="13px" src={sort} alt="" />
                  </div>
                </th>
              ))}
            </thead>

            <tbody>
              {" "}
              {mappedtb.map((t, i) => {
                return (
                  <tr
                    style={{
                      borderBottom: "1px solid #eaeaea",
                      background: i % 2 === 0 ? "#fff" : "#fafafa",
                    }}
                  >
                    <td style={{ width: "15%" }} className=" tabledata ">
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "500",
                          fontSize: "14px",
                          gap: "10px",
                        }}
                      >
                        <img src={t.img} alt="" />
                        {t.Name}
                      </span>
                    </td>
                    <td style={{ width: "30%" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <progress
                          className="progs"
                          value={t.value}
                          max={100}
                        ></progress>
                        <span className="seven">{t.Nom}</span>
                        <span className="percent">{t.percent}</span>
                      </div>
                    </td>
                    <td style={{ width: "15%", fontSize: "14px" }}>{t.Date}</td>
                    <td
                      style={{
                        width: "15%",
                        fontSize: "14px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#0d759f",
                          padding: ".2rem",
                          borderRadius: ".4rem",
                          width: "fit-content",
                          background: "#d6e6ec",
                        }}
                      >
                        <BsDot />
                        {t.categories}
                      </div>
                    </td>

                    <td
                      onClick={() => {
                        setNo(t.id);
                      }}
                      style={{ display: "flex", width: "15%" }}
                    >
                      <img
                        width="30px"
                        src={no === t.id ? t.off : t.image}
                        alt=""
                      />
                    </td>
                    <td
                      onMouseEnter={() => {
                        setId(t.id);
                      }}
                      onMouseLeave={() => {
                        setId(t.id);
                      }}
                      style={{ width: "10%" }}
                    >
                      {id === t.id ? (
                        <div
                          onClick={() => {
                            setView(false);
                          }}
                          className="dview"
                        >
                          view
                        </div>
                      ) : (
                        <BsThreeDotsVertical />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Div1>
      ) : (
        <>
          <Newmenu />
        </>
      )}
    </div>
  );
};

export default Menulist;

const Div1 = styled.div`
  width: 100%;
  padding-top: 1rem;
  .dview {
    font-size: 13px;
    cursor: pointer;
    padding: 0.2rem;
    color: #0d759f;
    background: #d6e6ec;
    width: fit-content;
    border-radius: 0.2rem;
  }
  table {
    width: 100%;
    border-radius: 0.5rem;
    background: #fafafa;
    border-collapse: collapse;
  }
  td {
    padding: 0.5rem;
  }
  thead {
    width: 100%;
  }
  .header {
    padding: 0.5rem;
    font-size: 14px;
    border-bottom: 1px solid #eaeaea;
    text-align: left;
  }
  .seven {
    font-size: 12px;
  }

  .percent {
    padding: 0.1rem;
    border-radius: 0.2rem;
    font-size: 10px;
    background: #daeedd;
    color: #56b064;
  }
  .dtable {
    font-size: 14px;
  }
  .tabledata img {
    display: flex;
    width: 1.5rem;
    border-radius: 1rem;
    align-items: center;
  }
`;
