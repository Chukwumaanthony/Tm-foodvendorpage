import React, { useState } from "react";
import { styled } from "styled-components";
import Addpic from "../../Assets/Menuimage/picture.svg";
import unmarked from "../../Assets/Menuimage/checked.svg";
import marked from "../../Assets/Menuimage/thecheck.svg";
// import check from "../../Assets/Menuimage/checked.svg";

const Newmenu = () => {
  const [tick, setTick] = useState(false);
  const [add, setAdd] = useState(false);
  const [extra, setExtra] = useState(false);
  const [move, setMove] = useState(false);

  const [extras, setExtras] = useState([1]);
  const [extraCount, setExtraCount] = useState(2);

  const addExtra = () => {
    setExtraCount(extraCount + 1);
    setExtras([...extras, extraCount]);
  };

  const check = [
    {
      Name: "Breakfast",
      id: 1,
      image: unmarked,
      checked: marked,
    },
    {
      Name: "Rice",
      id: 2,
      image: unmarked,
      checked: marked,
    },
    {
      Name: "Swallow",
      id: 3,
      image: unmarked,
      checked: marked,
    },
    {
      Name: "Pasta",
      id: 4,
      image: unmarked,
      checked: marked,
    },
  ];
  const myCheck = [
    {
      Name: "Yes",
      id: 1,
      image: unmarked,
      checked: marked,
    },
    {
      Name: "No",
      id: 2,
      image: unmarked,
      checked: marked,
    },
  ];
  return (
    <Divs>
      <div
        style={{
          display: "flex",
          paddingBlock: "1rem",
          justifyContent: "space-between",
        }}
      >
        <section style={{ width: "65%" }}>
          <div style={{ fontWeight: "600" }}>Categories</div>
          <div style={{ paddingTop: ".5rem", fontSize: "15px" }}>
            Select the menu category or add new category for the menu
          </div>
          <div
            style={{ paddingTop: ".5rem", fontSize: "14px" }}
            className="newcat"
          >
            <div>
              {" "}
              <button>+ Add new category</button>
            </div>
            <div className="new-ctg">
              {check.map((t) => {
                return (
                  <span className="name-check">
                    <span> {t.Name}</span>
                    <span className="check">
                      <img
                        onClick={() => {
                          setTick(t.id);
                        }}
                        src={tick === t.id ? t.checked : t.image}
                        alt=""
                      />
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
          <div style={{ paddingTop: "1rem" }}>
            <span style={{ fontWeight: "600" }}>Item Cover Picture </span>
            <span
              style={{
                display: "flex",
                gap: "10px",
                paddingTop: "1rem",
                alignItems: "center",
              }}
            >
              <div className="addpic">
                <img src={Addpic} alt="" />
              </div>
              <div className="add">
                <button className="ads">Add</button>
                <button className="rem">Remove</button>
              </div>
            </span>
            <div style={{ width: "100%", fontSize: "14px" }}>
              <div className="itemname">
                <label htmlFor="item">Item Name</label>
                <input type="text" />
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  paddingTop: "1rem",
                }}
              >
                <div className="itemnames">
                  <label htmlFor="item">Item Unit Price</label>
                  <input type="text" />
                </div>
                <div className="itemnames">
                  <label htmlFor="item">Item Discount(optional)</label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ paddingBlock: ".5rem" }}>Choose Extra</div>
            <span style={{ display: "flex", gap: "1rem" }}>
              {myCheck.map((m) => {
                return (
                  <span className="name-check">
                    <div>{m.Name}</div>
                    <div className="check">
                      <img
                        onClick={() => {
                          setExtra(m?.id);
                          if (m?.id === 1) {
                            setMove(true);
                          } else {
                            setMove(false);
                          }
                        }}
                        src={extra === m.id ? marked : unmarked}
                        alt=""
                      />
                    </div>
                  </span>
                );
              })}
            </span>
          </div>
        </section>

        {move ? (
          <section
            style={{
              height: "26rem",
              overflow: "hidden",
              overflow: "scroll",
              padding: "0 1rem 1rem 1rem",
              display: "flex",
              borderLeft: "1px solid #7777",
              flexDirection: "column",
              marginLeft: "5rem",
            }}
          >
            <span style={{ fontSize: "15px" }}>
              Add new extra for your menu and also select availabilty.
            </span>
            <span style={{ paddingTop: "1rem" }}>Add Choice</span>
            {extras.slice(0, 5)?.map((x, index) => {
              return (
                <div key={index} style={{ paddingTop: "1rem" }}>
                  <span className="extra">
                    <span className="check-extra">
                      <img
                        onClick={() => {
                          console.log(x === index + 1);
                          if (x === index + 1) {
                            setAdd(!add);
                          }
                          // if (x) {
                          //   setAdd(true);
                          // } else {
                          //   setAdd(false);
                          // }
                        }}
                        src={add ? marked : unmarked}
                        alt=""
                      />
                      <label>Extra {x} :</label>
                    </span>
                    <input className="extras" type="text" />
                  </span>
                </div>
              );
            })}

            <div className="newextra">
              <button onClick={addExtra}>+ New Extra</button>
            </div>
          </section>
        ) : undefined}
      </div>
      <div className="save-canc">
        <button className="dbtns">Save</button>
        <button className="cdbtns">Cancel</button>
      </div>
    </Divs>
  );
};

export default Newmenu;
const Divs = styled.div`
  .check {
    display: flex;
    font-size: 14px;
  }
  .newextra {
    padding-top: 2rem;
    width: 100%;
  }
  .newextra button {
    border: none;
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    background: #d9e8f2;
    color: #4ab2dc;
  }
  .extra {
    display: flex;
    gap: 5px;
  }
  .check-extra {
    display: flex;
    font-size: 14px;
    gap: 3px;
    align-items: center;
  }
  .newcat {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .newcat button {
    padding: 0.5rem;
    border: none;
    background: #48a5cb;
    color: white;
    border-radius: 0.3rem;
  }
  .name-check {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .new-ctg {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 14px;
  }
  .add {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .add button {
    color: white;
    padding: 0.3rem;
    border-radius: 0.3rem;
    border: none;
  }
  .addpic {
    display: flex;
  }
  .addpic img {
    width: 5rem;
  }
  .ads {
    background: #a3a3a3;
  }
  .rem {
    background: #d04747;
  }
  .itemname {
    display: flex;
    padding-top: 1rem;
    flex-direction: column;
  }
  .itemname input {
    display: flex;
    padding: 0.5rem;
    border-radius: 0.5rem;
    outline: none;
    border: 1.5px solid rgba(163, 163, 163, 0.3);
    margin-top: 5px;
  }
  .itemnames {
    display: flex;
    width: 49%;
    flex-direction: column;
  }
  .itemnames input {
    display: flex;
    padding: 0.5rem;
    border-radius: 0.5rem;
    outline: none;
    border: 1.5px solid rgba(163, 163, 163, 0.3);
    margin-top: 5px;
  }
  .extras {
    display: flex;
    padding: 0.5rem;
    width: 70%;
    border-radius: 0.5rem;
    outline: none;
    border: 1.5px solid rgba(163, 163, 163, 0.3);
  }
  .save-canc {
    border-top: 1px solid #7777;
    padding-top: 1px solid #7777;
    display: flex;
    gap: 10px;
  }
  .save-canc button {
    margin-top: 1rem;
    border-radius: 0.3rem;
    padding: 0.5rem;
    width: 15rem;
    border: none;
    outline: none;
  }
  .dbtns {
    color: white;
    background: #36aad9;
  }
  .cdbtns {
    background: white;
    color: black;
  }
`;
