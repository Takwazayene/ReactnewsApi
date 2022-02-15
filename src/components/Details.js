import React from 'react';
import { useParams, useLocation,useNavigate } from 'react-router-dom'
function Details({}) {

   //const url=props.match.params.url
   let navigation = useNavigate();
     const {url,description} =  useParams();

     
    let location = useLocation();
   console.log(location);


    return(
        <div>
       <h1> {url} </h1>
       <h1> {description} </h1>


       </div>
    );
}

export default Details;