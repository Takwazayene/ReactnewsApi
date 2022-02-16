import React, { useState, useEffect } from 'react'
import axios from 'axios'
import  NewsItem  from './NewsItem'
import { useParams, Link,useNavigate } from 'react-router-dom'
//import { Content, Loading } from './newlist';
import InfiniteScroll from 'react-infinite-scroll-component';
import './newsItem.css';
import dotenv from  'dotenv'
import "./Search.css"
import { useGoogleLogin } from 'react-google-login';
import { createStore } from "redux"
import { Provider } from "react-redux"
import { useSelector} from 'react-redux'

const PAGE_NUMBER = 1 ; 

function FavorisHL  (props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();
    const [searchItem, setSearchItem] = useState([]);

    const globalState = useSelector((state) => state);  
    console.log("session",globalState.isL)

    //const { googleUser } = useGoogleLogin()


    


    /*const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    
        if (scrollHeight - scrollTop === clientHeight) {
          setPage(prev => prev + 1);
        }
      };*/
    


    const apiKey ="22de0dc39bab4616960610b02d800650";

  

   useEffect(() => {

        const getArticles = async () => {
            setLoading(true);

            const response = await axios.get(`https://newsapi.org/v2/everything?q=actualités&from=2022-01-16&sortBy=publishedAt&_limit=1&apiKey=${apiKey}`,
            {
                params:{totalResults:1},
            }
           
            )
           

          setArticles(response.data.articles)
            setLoading(false);


            console.log(response)
        }

        getArticles()
    }, [])

  /*  const scrollToEnd = () => {
        setPage(page+1);
    }*/


/*window.onscroll = function() {
if (window.innerHeight + document.documentElement.scrollTop 
   === document.documentElement.offsetHeight
    )
 {
    scrollToEnd()
}
}*/

function details (url) {
  console.log(url)
  props.history.push("/details/"+url)

}





const handleSearchTerm = (e) => {
  let value = e.target.value;
  setSearchItem(value)
}


    return (
<>


      <div className="search">
            <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Rechercher"
            onChange={handleSearchTerm}
            
            />

        </div>
        
            
            <div >

            
             {articles.filter((val) => {
               return Object.values(val).join('').toLowerCase().includes(searchItem);
             })
             
             
             .map((val) => {
                return(
                <div> <div className="news-app">
                  <div className='news-item'>
                      <img className="img" src={val.urlToImage} alt={val.urlToImage}  onClick={()=>details(val.url)} />
                      <h3><a href={val.url}>{val.title}</a></h3>
                      <p>{val.description}</p>
                      <Link className="cardButton" to= { `/details/${val.title}/${val.description}`}

                            
                      >
                        details
          
            </Link>

          




                  </div>
              </div>

              </div> 
                )
            })}

</div>





        

                         

                          </>
                    

    )

}

export default FavorisHL;