import React, { useState } from "react";
import Face from "../../Assets/Orderimage/face.svg";
import Sort from "../../Assets/Orderimage/sorting.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { styled } from "styled-components";
import { BsDot } from "react-icons/bs";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import phone from "../../Assets/Orderimage/phone.jpg";
import food from "../../Assets/Orderimage/whiterice.svg";

const Orders = () => {
  const [id, setId] = useState();
  const [view, setView] = useState(true);

  const column = [
    { header: "Orders", id: 1, image: Sort },
    { header: "Date & Time", id: 2, image: Sort },
    { header: "Name", id: 3, image: Sort },
    { header: "Amount", id: 4, image: Sort },
    { header: "Food Ordered", id: 5, image: Sort },
    { header: "", id: 6, image: "" },
  ];

  const orders = [
    {
      id: 1,
      orderid: "Order ID",
      Figure: "#00248",
      Date: "Date & Time",
      Time: "1st Aug 2023, 09:20 am",
      Foodorder: "Food Ordered",
      rice: "White Rice - Plantain,turkey,beef,egg & coke(X2)",
      amount: "Amount",
      money: "3200.00",
      image: food,
    },
  ];
  const RecentTrx = [
    {
      id: 1,
      Date: "23rd july 2023, 09:20am",
      Name: "Adenike James",
      Amount: "₦3,200",
      No: "#00248",
      img: Face,
      food: "White Rice, plaintain...",
    },
    {
      id: 2,
      Date: "23rd july 2023, 09:20am",
      Name: "Adenike James",
      Amount: "₦3,200",
      No: "#00248",
      img: Face,
      food: "White Rice, plaintain...",
    },
    {
      id: 3,
      Date: "23rd july 2023, 09:20am",
      Name: "Adenike James",
      Amount: "₦3,200",
      No: "#00248",
      img: Face,
      food: "White Rice, plaintain...",
    },
    {
      id: 4,
      Date: "23rd july 2023, 09:20am",
      Name: "Adenike James",
      Amount: "₦3,200",
      No: "#00248",
      img: Face,
      food: "White Rice, plaintain...",
    },
    {
      id: 5,
      Date: "23rd july 2023, 09:20am",
      Name: "Adenike James",
      Amount: "₦3,200",
      No: "#00248",
      img: Face,
      food: "White Rice, plaintain...",
    },
    {
      id: 6,
      Date: "23rd july 2023, 09:20am",
      Name: "Adenike James",
      Amount: "₦3,200",
      No: "#00248",
      img: Face,
      food: "White Rice, plaintain...",
    },
    {
      id: 7,
      Date: "23rd july 2023, 09:20am",
      Name: "Adenike James",
      Amount: "₦3,200",
      No: "#00248",
      img: Face,
      food: "White Rice, plaintain...",
    },
    {
      id: 8,
      Date: "23rd july 2023, 09:20am",
      Name: "Adenike James",
      Amount: "₦3,200",
      No: "#00248",
      img: Face,
      food: "White Rice, plaintain...",
    },
    {
      id: 9,
      Date: "23rd july 2023, 09:20am",
      Name: "Adenike James",
      Amount: "₦3,200",
      No: "#00248",
      img: Face,
      food: "White Rice, plaintain...",
    },
  ];
  return (
    <Div2 className="ubalance-tran">
      {view ? (
        <section className="sector">
          <div className="rec-view">
            <span
              className="rec-trn"
              style={{ color: "black", fontWeight: "600", fontSize: "15px" }}
            >
              Recent Order
            </span>

            <span className="order-list"> Here is your recent order list</span>
          </div>
          <table>
            <thead>
              {column.map((m, i) => (
                <th style={{}} className="header" key={i}>
                  <div style={{ display: "flex", paddingBlock: ".3rem" }}>
                    {m.header} <img width="13px" src={m.image} alt="" />
                  </div>
                </th>
              ))}
            </thead>

            <tbody>
              {" "}
              {RecentTrx.map((t, i) => {
                return (
                  <tr
                    style={{
                      borderBottom: "1px solid #eaeaea",
                      background: i % 2 === 0 ? "#fff" : "#fafafa",
                    }}
                  >
                    <td style={{ width: "13%" }}>{t.No}</td>
                    <td style={{ width: "22%" }}>{t.Date}</td>
                    <td style={{ width: "22%" }} className=" tabledata ">
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

                    <td style={{ width: "14%" }}>{t.Amount}</td>
                    <td className="td-btn" style={{ width: "22%" }}>
                      {t.food}
                    </td>
                    <td
                      onMouseEnter={() => {
                        setId(t.id);
                      }}
                      onMouseLeave={() => {
                        setId(t.id);
                      }}
                      style={{ width: "7%" }}
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

          <span className="right-arw">
            <span>View full order</span>
            <span
              style={{
                display: "flex",
              }}
            >
              <MdKeyboardArrowRight />
            </span>
          </span>
        </section>
      ) : (
        <div className="Acdd">
          {orders.map((item, i) => {
            return (
              <div>
                <section onClick={() => {}} className="title">
                  <div
                    className="tits show"
                    onClick={() => {
                      setView(true);
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span>{item.orderid}</span>
                      <span className="tick">{item.Figure}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span>{item.amount}</span>
                        <span className="tick">{item.money}</span>
                      </div>
                      <div>
                        <span>
                          <FaLongArrowAltLeft />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="content show">
                    <section style={{ display: "flex", width: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          width: "45%",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            paddingBottom: "1rem",
                            borderBottom: "1px solid #ebebeb",
                          }}
                        >
                          <span>
                            <img width="65px" src={food} alt="" srcset="" />
                          </span>
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{ fontWeight: "bold", fontSize: "14px" }}
                            >
                              White Rice{" "}
                            </div>
                            <div
                              style={{
                                display: "flex",
                                gap: "3rem",
                                justifyContent: "space-between",
                                fontSize: "13px",
                              }}
                            >
                              <span>6,400.00</span>
                              <span style={{ color: "#777" }}>(Qty X2)</span>
                            </div>
                          </span>
                        </div>
                        <table
                          className="inner table"
                          style={{
                            background: "white",
                            width: "90%",
                          }}
                        >
                          <thead className="inner thead">
                            <th
                              className="inner th"
                              style={{
                                borderRadius: " .3rem 0 0 0 ",
                              }}
                            >
                              ITEM
                            </th>
                            <th
                              style={{
                                borderRadius: "0 .3rem  0 0 ",
                              }}
                            >
                              PRICE
                            </th>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="data">
                                <div
                                  className="pack"
                                  style={{
                                    color: "#aaaaaa",
                                  }}
                                >
                                  Takeaway Pack
                                </div>
                                <div className="required">Required</div>
                              </td>
                              <td className="datas">100.00</td>
                            </tr>
                            <tr>
                              <td className="data">
                                <div className="pack">White Rice </div>
                                <div className="required">2 Portion</div>
                              </td>
                              <td className="datas">400.00</td>
                            </tr>
                            <tr>
                              <td className="data">
                                <div className="pack">Plantain</div>
                                <div className="required">2 Portion</div>
                              </td>
                              <td className="datas">200.00</td>
                            </tr>
                            <tr>
                              <td className="data">
                                <div className="pack">Turkey</div>
                                <div className="required">1 Turkey</div>
                              </td>
                              <td className="datas">1000.00</td>
                            </tr>
                            <tr>
                              <td className="data">
                                <div className="pack">Beef</div>
                                <div className="required">2 Beef</div>
                              </td>
                              <td className="datas">200.00</td>
                            </tr>
                            <tr>
                              <td className="data">
                                <div className="pack">Fanta</div>
                                <div className="required">1 Fanta</div>
                              </td>
                              <td className="datas">200.00</td>
                            </tr>
                            <tr>
                              <td className="data">
                                <div>Total</div>
                                <div style={{ display: "flex" }}>
                                  <FaLongArrowAltRight />
                                </div>
                              </td>
                              <td className="datas">2100.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        style={{
                          borderLeft: "1px solid #7777",
                          paddingLeft: "1rem",
                          marginLeft: "1rem",
                          width: "45%",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <section
                          style={{
                            width: "70%",
                            background: "#e1f2f9",
                            borderRadius: "10px",
                            padding: ".4rem",
                            fontSize: "14px",
                          }}
                        >
                          <div
                            style={{
                              paddingBlock: ".4rem",
                            }}
                          >
                            Order Summary{" "}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span style={{ fontWeight: "500" }}>
                              Order created
                            </span>
                            <span>7th July 2023</span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span style={{ fontWeight: "500" }}>
                              Order time
                            </span>
                            <span>10.00am</span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontWeight: "500",
                              paddingBlock: ".2rem",
                            }}
                          >
                            <span>Sub total</span>
                            <span>9,600.00</span>
                          </div>
                        </section>
                        <section
                          style={{
                            width: "70%",
                            background: "#e1f2f9",
                            display: "flex",
                            justifyContent: "space-between",
                            borderRadius: "10px",
                            padding: ".4rem",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          <span>Total</span>
                          <span>9,600.00</span>
                        </section>
                        <section
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingInline: ".4rem",
                            fontSize: "14px",
                          }}
                        >
                          Customer details <BsDot />
                        </section>
                        <section
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: ".5rem",
                            paddingInline: ".4rem",
                            fontSize: "14px",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: ".5rem",
                            }}
                          >
                            {" "}
                            <img src={Face} alt="" />
                            Adeleke peters(tm30 staff)
                          </span>
                          <span
                            style={{
                              display: "flex",
                              gap: ".5rem",
                              borderRadius: ".5rem",
                              color: "rgba(0, 0,0,0.90)",
                              width: "fit-content",
                              padding: ".3rem",
                              alignItems: "center",
                              background: "#e1f2f9",
                            }}
                          >
                            <div>
                              <img src={phone} alt="" />
                            </div>
                            07083225145
                          </span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              paddingInline: ".4rem",
                              fontSize: "14px",
                            }}
                          >
                            Status <BsDot />
                          </span>
                          <span
                            style={{
                              background: "#e1f2f9",
                              padding: ".3rem",
                              color: "#45b0dc",
                              borderRadius: ".5rem",
                              width: "fit-content",
                            }}
                          >
                            Delivered
                          </span>
                        </section>
                      </div>
                    </section>
                  </div>
                </section>
                {/* // )} */}
              </div>
            );
          })}
        </div>
      )}
    </Div2>
  );
};

export default Orders;
const Div2 = styled.section`
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
    padding-left: 1.5rem;
  }
  thead {
    width: 100%;
  }
  .header {
    padding: 0.5rem;
    padding-left: 1.5rem;
    font-size: 14px;
    border-bottom: 1px solid #eaeaea;
    text-align: left;
  }

  .sector {
    border-radius: 20px;
    padding: 1rem;
    border: 1px solid rgba(119, 119, 119, 0.15);
    background: #fff;
    box-shadow: 3px 2px 6px -2px rgba(0, 0, 0, 0.2);
    font-size: 13px;
  }
  .adenike {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  .td-btn button {
    border: none;
    outline: none;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
  }
  .right-arw {
    display: flex;
    cursor: pointer;
    align-items: center;
    color: #777;
    font-size: 12px;
    padding-block: 1rem;
  }
  .rec-view {
    display: flex;
    flex-direction: column;
    color: #777;
  }
  .order-list {
    padding-block: 0.5rem;
  }

  .Acdd {
    width: 100%;
  }
  .title {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justifycontent: "space-between";
    border-radius: 10px;
    border: 1px solid rgba(119, 119, 119, 0.3);
  }
  .tits.show {
    display: flex;
    font-size: 14px;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid #7777;
  }
  .tick {
    font-weight: bold;
  }
  .content.show {
    padding-top: 1.3rem;
    height: auto;
    max-height: 9999px;
  }
  .datas {
    border-bottom: 1px solid #f8f8f8;
    border-inline: 1px solid #ebebeb;
    padding: 0.4rem;
  }
  .data {
    border-inline: 1px solid #ebebeb;
    border-bottom: 1px solid #f8f8f8;
    display: flex;
    align-items: center;
    padding: 0.4rem;
    gap: 1rem;
  }
  .pack {
    width: 7rem;
  }
  .required {
    display: flex;
    align-items: center;
    justifty-content: center;
    padding: 0.4rem;
    font-size: 10px;
    width: 3rem;
    color: #919191;
    border-radius: 0.3rem;
    background: #d1d1d1;
  }
  .inner.table {
    margin-block: 0.5rem;
    font-size: 13px;
    border-radius: 1rem;
    border-collapse: collapse;
  }
  .inner.thead {
    background: #48a5cb;
    width: 90%;
    color: white;
    text-align: left;
    border-radius: 100px;
  }
  .inner.th {
    width: 50%;
    padding: 0.4rem;
  }
`;
