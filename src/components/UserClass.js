import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://avatars.githubusercontent.com/u/86108132?v=4",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kmdurga67");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted it means moved to next page or component");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} alt="not found" />
        <UserContext.Consumer>
          {({ loggedUser }) => <h1>Name: {loggedUser}</h1>}
        </UserContext.Consumer>
        <h3>Location: {location}</h3>
        <h3>Email: durga123@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
