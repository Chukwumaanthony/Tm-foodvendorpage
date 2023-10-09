import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { styled } from "styled-components";
import phone from "../../Assets/Orderimage/phone.jpg";
import food from "../../Assets/Orderimage/whiterice.svg";
import face from "../../Assets/Orderimage/face.svg";

const Liveorders = () => {
  const order = [
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
    {
      id: 2,
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
    {
      id: 3,
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
    {
      id: 4,
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
    {
      id: 5,
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
  const [view, setView] = useState(true);

  return (
    <Div1 className="wrapper">
      {view ? (
        <div className="accordian">
          {order.map((item, i) => {
            return (
              <div className="item">
                <section onClick={() => {}} className="title">
                  <div
                    className="tits"
                    onClick={() => {
                      setView(false);
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span>{item.orderid}</span>
                      <span className="tick">{item.Figure}</span>
                    </div>

                    <div
                      className="remove"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <span>{item.Date}</span>
                      <span className="tick">{item.Time}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span>{item.Foodorder}</span>
                      <span className="tick">{item.rice}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span>{item.amount}</span>
                      <span className="tick">{item.money}</span>
                    </div>
                    <div>
                      <span>
                        <FaLongArrowAltRight />
                      </span>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
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
                            <div style={{ fontWeight: "bold" }}>
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
                          style={{
                            width: "90%",
                          }}
                        >
                          <thead>
                            <th
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
                            <img src={face} alt="" />
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
    </Div1>
  );
};

export default Liveorders;
const Div1 = styled.section`
  display: flex;
  font-size: 14px;
  padding-block: 1rem;
  table {
    margin-block: 0.5rem;
    font-size: 13px;
    border-radius: 1rem;
    border-collapse: collapse;
  }
  thead {
    background: #48a5cb;
    width: 90%;
    color: white;
    text-align: left;
    border-radius: 100px;
  }
  th {
    width: 50%;
    padding: 0.4rem;
  }
  .remove {
    display: none;
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
  .accordian {
    border-radius: 20px;
    width: 100%;
    border: 1px solid rgba(119, 119, 119, 0.15);
    background: #fff;
    box-shadow: 3px 2px 6px -2px rgba(0, 0, 0, 0.2);
  }
  .item {
    margin: 1rem;
    cursor: pointer;
  }
  .tits {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content {
    overflow: hidden;
    max-height: 0;
  }
`;
