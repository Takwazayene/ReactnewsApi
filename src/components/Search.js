import React  from "react";
import {useState, useEffect} from "react"
import "./Search.css"


function Search() {

const [datas,setDatas] = useState([]);

useEffect(()=> {
  fetch(
      
  )

})


    return (
        <>
        <div className="search">
            <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Rechercher"
            
            
            />

        </div>
        <div className="search_results">
        <div className="search__result">donnée</div>
        
        
        </div>
        </>
    );
}

export default Search;