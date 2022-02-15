import React, { useState, useEffect } from 'react'
import axios from 'axios'
import  NewsItem  from './NewsItem'
import { useParams, Link,useNavigate } from 'react-router-dom'
//import { Content, Loading } from './newlist';
import InfiniteScroll from 'react-infinite-scroll-component';
import './newsItem.css';
import dotenv from  'dotenv'


const PAGE_NUMBER = 1 ; 

function NewsList  (props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();



    


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

    return (
        <InfiniteScroll
        dataLength={articles.length}
        next={getMore}
        hasMore={true}
        loader={<h4>loading</h4>}

        >
            

            
             {articles.map(article => {
                return(

                <div> <div className="news-app">
                  <div className='news-item'>
                      <img className='news-img' src={article.urlToImage} alt={article.urlToImage}  onClick={()=>details(article.url)} />
                      <h3><a href={article.url}>{article.title}</a></h3>
                      <p>{article.description}</p>
                      <Link to= { `/details/${article.title}/${article.description}`}

                            
                      >
                        details
          
            </Link>

          




                  </div>
              </div>

              </div> 
                )
            })}




        

                          </InfiniteScroll>

    )
}

export default NewsList;
