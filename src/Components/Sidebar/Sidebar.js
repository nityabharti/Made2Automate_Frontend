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

        <div>
          <ul>
            <li className="items">Dashboard</li>
            <li>Stock</li>
            <li>Orders</li>
            <li>Products</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
