import React, { useState, useEffect } from 'react'
import axios from 'axios'
import  NewsItem  from './NewsItem'
import { useParams, Link,useNavigate } from 'react-router-dom'
//import { Content, Loading } from './newlist';
import InfiniteScroll from 'react-infinite-scroll-component';
import './newsItem.css';
import dotenv from  'dotenv'
import "./Search.css"


const PAGE_NUMBER = 1 ; 

function NewsList  (props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();
    const [searchItem, setSearchItem] = useState([]);




    


    /*const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    
        if (scrollHeight - scrollTop === clientHeight) {
          setPage(prev => prev + 1);
        }
      };*/
    


    const apiKey ="7c57bd36d89847aaadb9f46bd07a7189";

 //    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",cleAPI)

   useEffect(() => {
        const getArticles = async () => {
          //  setLoading(true);

            const response = await axios.get(`https://newsapi.org/v2/everything?q=actualités&apiKey=${apiKey}`,
            {
                params:{page:page},
                
            }
            )
            setArticles((prev) => [...prev, ...response.data.articles]);
          //  setLoading(false);

          //  setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [page])

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


const getMore = async () => {
    
    setPage(page+1)
    setLoading(true);

    const response = await axios.get(`https://newsapi.org/v2/everything?q=actualités&apiKey=${apiKey}`,
    {
        params:{page:page},
        
    }
    )
    setArticles((articles) => [...articles, ...response.data.articles]);
    setLoading(false);

  //  setArticles(response.data.articles)
    console.log(response)
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
        <InfiniteScroll
        dataLength={articles.length}
        next={getMore}
        hasMore={true}
        loader={<h4>loading</h4>}

        >
            
            <div className="search_results">

            
             {articles.filter((val) => {
               return Object.values(val).join('').toLowerCase().includes(searchItem);
             })
             
             
             .map((val) => {
                return(
                <div> <div className="news-app">
                  <div className='news-item'>
                      <img className='news-img' src={val.urlToImage} alt={val.urlToImage}  onClick={()=>details(val.url)} />
                      <h3><a href={val.url}>{val.title}</a></h3>
                      <p>{val.description}</p>
                      <Link to= { `/details/${val.title}/${val.description}`}

                            
                      >
                        details
          
            </Link>

          




                  </div>
              </div>

              </div> 
                )
            })}

</div>





        

                          </InfiniteScroll>

                          </>
                    

    )

}

export default NewsList;
