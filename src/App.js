import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Listing from "./components/Listing";
import Create from "./components/Create";
import Login from "./components/Login";
import Signup from "./components/Signup";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Play from "./components/Play";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAclcVpisgR31m2xtWNFVPTqTN69fvrdhs",
  authDomain: "quiz-137dc.firebaseapp.com",
  databaseURL: "https://quiz-137dc-default-rtdb.firebaseio.com",
  projectId: "quiz-137dc",
  storageBucket: "quiz-137dc.appspot.com",
  messagingSenderId: "385736696489",
  appId: "1:385736696489:web:d99cf692dd7599ac997fb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "",
          element: '',
        },
        {
          path: "listing",
          element: <Listing />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "play",
          element: 
          <ProtectedRoutes>
            <Play />
          </ProtectedRoutes>
        },
        
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

export const ProtectedRoutes = (children) =>{
  if(localStorage.getItem('ebharat')){
    return children
  }else{
    return <Navigate to='/login'/>
  }
}