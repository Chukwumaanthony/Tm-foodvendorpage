import React from "react";
import { styled } from "styled-components";

const Settings = () => {
  return (
    <Div1>
      <div className="settings">
        <span className="Dset">Settings</span>
        <span className="vend-manager">
          Please change your password as the vendor manager
        </span>
      </div>

      <div className="Sec">
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "3rem",
            gap: "1rem",
          }}
        >
          <div className="Label">
            <label htmlFor="Name">Name</label>

            <input placeholder="Vendor (Mama J Bukka)" type="text" id="Name" />
          </div>
          <div className="Label">
            <label htmlFor="Old">Old Password</label>

            <input type="text" id="Old" />
          </div>
          <div className="Label">
            <label htmlFor="New">New Password</label>

            <input type="text" id="New Password" />
          </div>
          <div className="Label">
            <label htmlFor="  Pass">Confirm New Password</label>

            <input type="text" id="Pass" />
          </div>
          <div className="Label">
            <label htmlFor="  Pass"></label>

            <div className="save-canc">
              <button style={{ color: "white", background: "#48a5cb" }}>
                Save{" "}
              </button>
              <button
                style={{
                  border: "1px solid rgba(163, 163, 163, 0.70)",
                  background: "white",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      </div>
    </Div1>
  );
};

export default Settings;

const Div1 = styled.div`
  background: #f6f6f6;
  height: 100%;
  padding: 1rem;
  .save-canc {
    width: 26rem;
    display: flex;
    justify-content: space-between;
  }
  .save-canc button {
    width: 45%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
  }
  .settings {
    display: flex;
    margin-bottom: 2rem;
    flex-direction: column;

    font-size: 14px;
  }
  .Dset {
    font-size: 17px;
    font-weight: 600;
  }
  .vend-manager {
    color: #b6b6b6;
  }
  .Sec {
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 60%;
    border-radius: 0.7rem;
    background: #fff;
    box-shadow: 3px 2px 6px -2px rgba(0, 0, 0, 0.2);
  }
  .Label {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .Label label {
    font-size: 14px;
    width: 10rem;
  }
  .Label input {
    outline: none;
    font-size: 14px;
    width: 25rem;
    border-radius: 10px;
    border: 1px solid rgba(163, 163, 163, 0.5);
    padding: 0.5rem;
  }
  input::placeholder {
    font-size: 12px;
  }
`;
