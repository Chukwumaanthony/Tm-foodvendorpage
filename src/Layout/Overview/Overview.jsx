import React from "react";
import Chart from "../../Reusable/Areachart";
import Table from "../../Reusable/Ordertable";
import { styled } from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import { PiDotOutlineFill } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import Orders from "../../Assets/Dashimage/checklist.svg";
import Menu from "../../Assets/Dashimage/menu.svg";
import Sales from "../../Assets/Dashimage/sell.svg";
import Up from "../../Assets/Dashimage/arrowup.svg";

const Overview = () => {
  const Menus = [
    {
      image: Orders,
      Name: "Orders",
      number: "97",
      arrowup: Up,
      rating: "17.2%",
      date: "today",
      background: "#64BBDE",
    },
    {
      image: Menu,
      Name: "Menus",
      number: "38",
      arrowup: Up,
      rating: "4.7",
      date: "today",
      background: "#BB95ED",
    },
    {
      image: Sales,
      Name: "Sales",
      number: "₦ 126,910",
      arrowup: Up,
      rating: "24.2%",
      date: "today",
      background: "#B69C99",
    },
  ];
  return (
    <Container2>
      <div className="sales">
        <div>
          <Chart />
        </div>
        <div className="today-stat">
          <div className="static">
            <div className="static-icon">
              Statics <PiDotOutlineFill />
            </div>
            <div className="date-select">
              <div className="calend">
                <div className="lucalendar">
                  <LuCalendarDays />
                </div>
                Today
              </div>
              <div className="down">
                <RiArrowDownSLine />
              </div>
            </div>
          </div>
          {Menus.map((m) => {
            return (
              <div
                style={{
                  background: m.background,
                }}
                className="orders"
              >
                <div className="names">
                  <div className="order-img">
                    <img src={m.image} alt="" />
                  </div>
                  <section className="d-sect">
                    <div>{m.Name}</div>
                    <div>{m.number}</div>
                  </section>
                </div>
                <div className="arrow">
                  <div className="rate">
                    <img src={m.arrowup} alt="" />
                    <div>{m.rating}</div>
                  </div>
                  <div>{m.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Table />
    </Container2>
  );
};
export default Overview;
const Container2 = styled.section`
  .orders {
    display: flex;
    padding: 1rem;
    color: white;
    font-weight: 500;
    border-radius: 10px;
    justify-content: space-between;
  }
  .names {
    display: flex;
    gap: 10px;
  }
  .d-sect {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .arrow {
    display: flex;
    align-items: last baseline;
    gap: 4px;
    font-size: 13px;
  }
  .rate {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 3rem;
    background: white;
    border-radius: 5px;
    padding: 0.1rem;
    font-size: 11px;
    color: green;
  }
  .rate img {
    width: 10px;
  }
  .order-img {
    background: white;
    border-radius: 10px;
    padding: 0.7rem;
    display: flex;
    align-items: center;
  }
  .date-select {
    display: flex;
    width: 7rem;
    font-size: 13px;
    color: #777;
    border: 1px solid #ececec;
    border-radius: 0.3rem;
    padding: 0.3rem;
    justify-content: space-between;
    align-items: center;
  }
  .static {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .today-stat {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    border-left: 1px solid #ececec;
  }
  .calend {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .static-icon {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.9);
  }
  .down {
    display: flex;
    align-items: center;
  }
  .lucalendar {
    display: flex;
    font-size: 18px;
  }
`;
