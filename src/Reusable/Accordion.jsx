import React, { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { styled } from "styled-components";
import food from "../Assets/Orderimage/whiterice.svg";

const Liveorder = () => {
  const order = [
    {
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
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <Div1 className="wrapper">
      <div className="accordian">
        {order.map((item, i) => {
          return (
            <div className="item">
              <section className="title">
                <div
                  className={selected === i ? "tits show" : "tits"}
                  onClick={() => toggle(i)}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>{item.orderid}</span>
                    <span className="tick">{item.Figure}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
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
                      {selected === i ? (
                        <FaLongArrowAltLeft />
                      ) : (
                        <FaLongArrowAltRight />
                      )}
                    </span>
                  </div>
                </div>
                <div className={selected === i ? "content show" : " content"}>
                  <section
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", gap: "10px" }}>
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
                            White Rice - plantain,turkey,beef,egg & coke
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: "13px",
                            }}
                          >
                            <span style={{ color: "#777" }}>(Qty X2)</span>
                            <span>6,400.00</span>
                          </div>
                        </span>
                      </div>
                      <div>Order status</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <section
                        style={{
                          background: "#e1f2f9",
                          borderRadius: "10px",
                          padding: ".4rem",
                          fontSize: "12px",
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
                          <span style={{ fontWeight: "600" }}>
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
                          <span style={{ fontWeight: "600" }}>Order time</span>
                          <span>10.00am</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontWeight: "600",
                            paddingBlock: ".2rem",
                          }}
                        >
                          <span>Sub total</span>
                          <span>9,600.00</span>
                        </div>
                      </section>
                      <section
                        style={{
                          background: "#e1f2f9",
                          display: "flex",
                          justifyContent: "space-between",
                          borderRadius: "10px",
                          padding: ".4rem",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        <span>Total</span>
                        <span>9,600.00</span>
                      </section>
                      <section
                        style={{
                          display: "flex",
                          paddingInline: ".4rem",
                          fontSize: "12px",
                        }}
                      >
                        Customer details .
                      </section>
                      <section
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingInline: ".4rem",
                          fontSize: "12px",
                        }}
                      >
                        <span>Adeleke peters(tm30 staff)</span>
                        <span>07083225145</span>
                      </section>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          );
        })}
        {/* {data.map((item, i) => {
          return (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <span>{item.question}</span>
                <span>{selected === i ? "-" : " +"}</span>

                <div className={selected === i ? "content show" : " content"}>
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </Div1>
  );
};

export default Liveorder;
const Div1 = styled.section`
  display: flex;
  font-size: 14px;
  padding-block: 1rem 2rem;
  .accordian {
    border-radius: 20px;
    width: 100%;
    border: 1px solid rgba(119, 119, 119, 0.15);
    background: #fff;
    box-shadow: 3px 2px 6px -2px rgba(0, 0, 0, 0.2);
  }
  .tick {
    font-weight: bold;
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
  .tits.show {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid #7777;
  }
  .title {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justifycontent: "space-between";
    border-radius: 10px;
    border: 1px solid rgba(119, 119, 119, 0.3);
  }
  .content {
    // margin-top: 1rem;
    overflow: hidden;
    max-height: 0;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  }
  .content.show {
    padding-top: 1.3rem;
    height: auto;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
    max-height: 9999px;
  }
`;
