import React, { useState } from "react";
import Chart from "react-apexcharts";
import { styled } from "styled-components";

const App = () => {
  const [today, setToday] = useState(true);
  const [week, setWeek] = useState();
  const [month, setMonth] = useState();

  const options = {
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 5,
      dashArray: 0,
    },
    fill: {
      colors: "#ddd",
      opacity: 0.1,
      type: "solid",
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: false,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: false,
      style: {
        fontSize: "10px",
        fontFamily: undefined,
      },
    },
    toolbar: {
      show: false, // Set this to false to hide the menu bar
    },
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],

      grid: {
        show: false,
      },
    },
  };

  const series = [
    {
      name: "series-1",
      data: [70, 190, 120, 175, 900, 750, 1200, 970, 1070, 670, 730, 690],
    },
  ];

  return (
    <Container2 className="app">
      <div className="row">
        <div className="sales-rep">
          <div>
            <div>Sales Report</div>
            {/* <div>

            </div> */}
          </div>
          <div className="btn-holder">
            <button
              onClick={() => {
                setToday(true);
                setWeek(false);
                setMonth(false);
              }}
              style={{
                background: today ? "#48a5cb" : "",
                color: today ? "white" : "",
              }}
            >
              Today
            </button>
            <button
              onClick={() => {
                setWeek(true);
                setToday(false);
                setMonth(false);
              }}
              style={{
                background: week ? "#48a5cb" : "",
                color: week ? "white" : "",
              }}
            >
              Weekly
            </button>
            <button
              onClick={() => {
                setMonth(true);
                setToday(false);
                setWeek(false);
              }}
              style={{
                background: month ? "#48a5cb" : "",
                color: month ? "white" : "",
              }}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="area"
            height="300"
            // width="650"
          />
        </div>
      </div>
    </Container2>
  );
};

export default App;

const Container2 = styled.section`
  box-shadow: 3.8px 2.53333px 7.6px -2.53333px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border: 1.392px solid #eff0f6;
  padding: 0.5rem;
  font-size: 15px;
  font-weight: 700;
  .sales-rep {
    display: flex;
    align-items: center;
    padding-inline: 1rem;
    justify-content: space-between;
  }
  .sales-rep button {
    font-size: 10px;
    font-weight: 500;
    width: 4.2rem;
    background: #ececec;
    border-radius: 0.5rem;
    color: black;
  }
  .btn-holder {
    padding: 0.4rem;
    background: #ececec;
    border-radius: 0.5rem;
  }
`;
