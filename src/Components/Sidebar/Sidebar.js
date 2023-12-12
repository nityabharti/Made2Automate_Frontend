import "./sidebar.css";

import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <img
          className="logo"
          src="https://internme.app/public/assets/docs/uploads/emp_profile/1694266857_d498c12c9ef29469d3eb.png"
          alt=""
        />

        <ul>
          <li className="items">
            <img
              height={20}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828765.png"
              alt="imgicon"
            />
            <a href="#">Dashboard</a>
          </li>
          <li className="items">
            <img
              height={20}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828765.png"
              alt="imgicon"
            />
            <a href="#">Stocks</a>
          </li>
          <li className="items">
            <img
              height={20}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828765.png"
              alt="imgicon"
            />
            <a href="#">orders</a>
          </li>
          <li className="items">
            <img
              height={20}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828765.png"
              alt="imgicon"
            />
            <a href="#">Products</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
