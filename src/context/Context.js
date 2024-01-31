import React, { createContext, useEffect, useState } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainContext = createContext();

const Context = (props) => {
  // error function
  const notify = (msg) => toast(msg);

 
  const [user, setUser] = useState(null);
  const [quiz, setQuiz] = useState([]);
  const [current,setCurrent] = useState(0);
  const [answer,setAnswer] = useState({});
  const [result,setResult] = useState(null)

// get Data from firebase real time database

const getDataFromDb = () => {

  const db = getDatabase();
  const starCountRef = ref(db, "quizes");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    // console.log(data);

    let keys = Object.keys(data)
    console.log(keys)
    const arr = []

    for(let k of keys){
      arr.push(
        {
          ...data[k],
          id:k
        }
      )
    }

    console.log(arr)
    setQuiz(arr)
  });


};



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
    if(lsData != null){
      setUser(JSON.parse(lsData));
    }

    // get data from firebase
    getDataFromDb()

    // get current from ls
    let lsCurrent = localStorage.getItem('current')
    if(lsCurrent != null){
      setCurrent(parseInt(lsCurrent))
    }


    // get answer from ls
    let lsAns = localStorage.getItem('answer');
    if(lsAns != null){
      setAnswer(JSON.parse(lsAns))
    }
  
  }, []);


  // next function
  const next = () => {
    setCurrent(current+1)
  }

  // previus function
  const prev = () => {
    setCurrent(current-1)
  }

  // setcurrent inside the localstorage
  useEffect(
    ()=>{
      localStorage.setItem('current',JSON.stringify(current))
    },[current]
  )

  // userAnswer function

  const currAns = (ans) => {
    // console.log(ans)
    const tempAns = {...answer};
    tempAns[current] = ans;

    setAnswer(tempAns)
  }

  // set answer inside the localstorage
  useEffect(
    ()=>{
      if(Object.keys(answer).length != 0){
        localStorage.setItem('answer',JSON.stringify(answer))
      }
    },[answer]
  )


  // finish function

  const finish = () => {

    let marks = 0;
    for (let i = 0; i < quiz.length; i++) {
      // console.log(quiz[i].corrAns, answer[i])

      if(quiz[i].corrAns == answer[i]){
        marks++
      }
      const res = {
        total:quiz.length,
        marks
      }

      setResult(res)
    }
  }


  // keep playing function

  const keepPlaying = () =>{
    setResult(null)
    setCurrent(0)
    setAnswer({})
  }

  // quit playing function

  

  return (
    <MainContext.Provider value={{setAnswer,setResult, setResult, loginUser, currAns,notify, user,logout,getDataFromDb,quiz,current,setCurrent,prev,next,answer,finish,result,keepPlaying,}}>
      <ToastContainer />
      {props.children}
    </MainContext.Provider>
  );
};

export default Context;

export { MainContext };
