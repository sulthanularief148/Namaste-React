import { Component } from "react";
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
  // async componentDidMount() {
  //   const data = await fetch("https://api.github.com/users/ariefsulthanul468");
  //   const response = await data.json();
  //   this.setState({ userInfo: response });
  // }
  render() {
    const userData = this.state.userInfo;
    return (
      <>
        <div className="w-3/12 shadow border rounded-lg flex justify-center items-center px-4 py-4 mx-auto">
          <h1 className="text-2xl text-center font-bold">Hi I am Areif, Full Stack Developer</h1>
        </div>


        {/* <UserClass
          image={userData?.avatar_url}
          email={userData?.email || "ariefsulthanul468@gmail.com"}
          mobile={userData.mobile || "9659051798"}
          location={userData.location || "Portonovo"}
        /> */}

      </>
    );
  }
}

export default About;
