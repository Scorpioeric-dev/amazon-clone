import React from "react";
import "../Style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShopppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
        className="header_logo"
      />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
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
        <div className="header_optionBasket">
          <ShopppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">0</span>
          {/*Dynamic*/}
        </div>
      </div>
    </div>
  );
}

export default Header;