import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "Arief",
        email: "sulthanularief148@gmail.com",
        mobile: "8248566678",
        location: "chennai",
        image: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ariefsulthanul468");
    const response = await data.json();
    this.setState({ userInfo: response });
  }
  render() {
    const userData = this.state.userInfo;
    return (
      <>

          <UserClass
            image={userData?.avatar_url}
            email={userData?.email || "ariefsulthanul468@gmail.com"}
            mobile={userData.mobile || "9659051798"}
            location={userData.location || "Portonovo"}
          />
     
      </>
    );
  }
}

export default About;
