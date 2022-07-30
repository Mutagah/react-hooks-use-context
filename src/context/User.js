import React from "react";
//Creating the context Object
const UserContext = React.createContext();
//creating a provider component that gives access to the context data to its child components
function UserProvider({children})
{
    const currentUser = {
        name: "Duane",
        interests: ["Coding", "Biking", "Singing"],
      };
//the value of the provider will be our context data
//this value will be available to child components of this provider
return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}
export {UserContext, UserProvider};


