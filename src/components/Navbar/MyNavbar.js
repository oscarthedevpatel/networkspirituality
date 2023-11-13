import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import React from "react";

const Navigation = () => {
  return (
    <div className="container">
      {" "}
      {/* Apply the sticky-container class here */}
      {/* <a href="https://www.uber.com/us/en/deliver/" className="button">
        ORDER NOW
      </a> */}
      <a href="https://t.me/UbereatsErc" className="button">
        Telegram
      </a>
      <a href="https://twitter.com/ubereatserc" className="button">
        Twitter
      </a>
      <a href="#" className="button">
        Chart
      </a>
    </div>
  );
};

export default Navigation;
