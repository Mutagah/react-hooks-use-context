import React,{useContext} from "react";
import Interests from "./Interests";
import {UserContext} from "../context/User"
function Profile({theme }) {
  //calling useContext with userContext
  const user = useContext(UserContext)
  //We are now able to use the user object just like we would if it was passed as a prop
  console.log(user)
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
