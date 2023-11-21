import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name:"Dummy",
        location:"Default",
        avatar_url:"https://avatars.githubusercontent.com/u/86108132?v=4"
      }
    }
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kmdurga67");
    const json = await data.json();
    this.setState({userInfo:json});
    console.log(json);
  }

  componentDidUpdate(){
    console.log("Component Updated"); 
  }

  componentWillUnmount(){
    console.log("Component Unmounted it means moved to next page or component");
  }
  
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="not found" />
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Email: durga123@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
