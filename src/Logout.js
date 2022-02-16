import './index.css';
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout,useGoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'



const clientId = "269002485153-eo7kgmk59gbpbfkg47iplm0nnd5ua2tb.apps.googleusercontent.com";





function Logout()
{
 

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
 // const navigate = useNavigate();

  const globalState = useSelector((state) => state);  
  const dispatch = useDispatch();  



  
   const onLoginSuccess = (res) => {
      console.log('Login Success:', res.profileObj);
  //    console.log('Login Success:', res.profileObj.email);

      setShowloginButton(false);
      setShowlogoutButton(true);
 


   
      dispatch({ type: "SET_IS_LOGGED", payload: true });

  //  navigate("/");


      //router.push('/list')


  };

  const onLoginFailure = (res) => {
      console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
      alert("You have been logged out successfully");
      console.clear();
      setShowloginButton(true);
      setShowlogoutButton(false);
      dispatch({ type: "SET_IS_LOGGED", payload: false });

   //  navigate("/list");

  };

  

  return (
    <div className="g-signin" >
      




                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> 
         




    </div>
  )
}





export default Logout;