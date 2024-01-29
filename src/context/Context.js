import React, { createContext, useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainContext = createContext();

const Context = (props) => {
  // error function
  const notify = (msg) => toast(msg);

 
  const [user, setUser] = useState(null);


  // set user inside localstorage and state

  const loginUser = (user) => {
    setUser(user);
    localStorage.setItem("quiz", JSON.stringify(user));
  };


  // logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('quiz')
  }



  // get Data from localstorage
  useEffect(() => {
    let lsData = localStorage.getItem("quiz");
    setUser(JSON.parse(lsData));
  }, []);

  return (
    <MainContext.Provider value={{ loginUser, notify, user,logout }}>
      <ToastContainer />
      {props.children}
    </MainContext.Provider>
  );
};

export default Context;

export { MainContext };
