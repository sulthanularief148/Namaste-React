import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Heading = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <header className="flex justify-between items-center m-4">
      <div className="logo-container">
        <img className="w-24" src={`${LOGO_URL}`} />
      </div>
      <div className="">
        <ul className="flex gap-8 p-8 items-center">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link className="nav-links " to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="nav-links">Cart</Link>
          </li>
          <button
            className="header-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </header>
  );
};
