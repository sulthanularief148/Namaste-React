import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import useOnlineStatus from "../utils/useOnlineStatus";
import useCurrentLocation from "../../useCurrentLocation";
import UserContext from "../utils/UserContext";
export const Heading = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { address, error } = useCurrentLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="md:flex block justify-between items-center m-4">
      {/* Mobile View  Toggle IcoN*/}
      <div className="md:hidden">
        <button onClick={toggleNavbar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Logo */}
      <div className="logo-container hidden md:block">
        <img className="w-24" src={logo} />
      </div>
      {/* Location */}
      <div className="flex md:flex-row flex-col">
        {address ? (
          <p className="text-[lightgray]"> {address}</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <p>Fetching Location...</p>
        )}
      </div>

      {/* Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:flex`}>
        <ul className="md:flex gap-8 p-8 items-center">
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
          <li>
            <Link className="nav-links">{loggedInUser}</Link>
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
