import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
        className="header_logo"
      />
      <div className="header_search">
        <input className="header_searchbar" type="text" />
        {/*Logo */}
      </div>
      <div className="header_nav">
        {/*HeaderNav*/}
        <div className="header_option">
          <span className="header_optionOne">Hello Guest</span>
          <span className="header_optionTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
