import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Premium Food, Delivered Hot.</h2>
        <p>
          Choose from a diverse menu featuring a deletable array of dishes
          crafted with the finest ingredients and culinary expertise. Satisfy
          your cravings with the best food in town.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
