import './index.css';
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout,useGoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { createStore } from "redux"
import { Provider } from "react-redux"


//import { Redirect } from "react-router";



/*const responseGoogle = response =>  {

  console.log(response);

};*/


const clientId = "269002485153-eo7kgmk59gbpbfkg47iplm0nnd5ua2tb.apps.googleusercontent.com";





function Login()
{
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSignedIn, SetIsSignedIn] = useState(false);



  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const navigate = useNavigate();

  const globalState = useSelector((state) => state);  
  const dispatch = useDispatch();  


  //const router = useRoutes()

   /* const store = createStore({
    name: name,
    email: email,
    isSignedIn:isSignedIn
  
  
  }) */
  
   const onLoginSuccess = (res) => {
      console.log('Login Success:', res.profileObj);
  //    console.log('Login Success:', res.profileObj.email);

      setShowloginButton(false);
      setShowlogoutButton(true);
      setName(res.profileObj.givenName);
      setEmail(res.profileObj.email);
      SetIsSignedIn(true);


      console.log("hhhhhhhhh")
      dispatch({ type: "SET_IS_LOGGED", payload: true });

    navigate("/");


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
        { showloginButton ?
<GoogleLogin
clientId={clientId}
buttonText="Sign In"
onSuccess={onLoginSuccess}
onFailure={onLoginFailure}
cookiePolicy={'single_host_origin'}
isSignedIn={true}

/> : null}



{ showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }




    </div>
  )
}





export default Login;