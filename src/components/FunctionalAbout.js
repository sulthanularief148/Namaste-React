import { useState, useEffect } from "react";
import UserClass from "./UserClass";

const FunctionalAbout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Arief",
    email: "sulthanularief148@gmail.com",
    mobile: "8248566678",
    location: "chennai",
    image: "",
  });

  useEffect(() => {
    fetchData();
    return () => {
      console.log("return");
    };
  }, []);
  async function fetchData() {
    const data = await fetch("https://api.github.com/users/sulthanularief143");
    const response = await data.json();
    setUserInfo(response);

  }

  const userData = userInfo;


  return (
    <>
      <UserClass
        image={userData?.avatar_url}
        name={userData.name}
        email={userData?.email || "ariefsulthanul468@gmail.com"}
        mobile={userData.mobile || "9659051798"}
        location={userData.location || "Portonovo"}
      />
    </>
  );
};

export default FunctionalAbout;
