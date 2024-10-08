import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    const { name, email, mobile, location, image } = this.props;

    return (
      <>
        <div className="user-card">
          <img src={image} width={200} height={200} />
          <div className="card-head">
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <h2 className="user-name">Name: {loggedInUser}</h2>
              )}
            </UserContext.Consumer>
          </div>
          <div className="user-body">
            <h3 className="user-email">Email : {email} </h3>
            <h3 className="user-mobile">Mobile : {mobile}</h3>
            <h3 className="user-location">Location : {location}</h3>
          </div>
        </div>
      </>
    );
  }
}



export default UserClass;
