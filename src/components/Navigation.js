import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux'

function Navigation() {
    const [session, setSession] = useState();

    const globalState = useSelector((state) => state);  
    console.log("session",globalState.isLogged)
    //setSession(globalState.isLogged);
   

    return(

<div className="navbar">
      <span className="logo">
      <Link className="link" to="/">
          appsolute App
        </Link>
      </span>

        <ul className="list">
        { !globalState.isLogged ? (
          <>

<Link to="/FavorisHL">
            <li  className="listItem" >FavorisHL</li>

            </Link>

           
           
           
            <Link to='/login'>
            <li   className="listItem" >login</li>

            </Link>
           

         </> 
            ) :(
       <>

<Link to="/">
            <li  className="listItem" >Accueil</li>

            </Link>

            <Link to='/logout'>
            <li   className="listItem" >logout</li>

            </Link>


            
            

            </> 
             ) }
     


        </ul>
        </div>
    )
}

export default Navigation;