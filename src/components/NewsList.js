import React, { useState, useEffect } from 'react'
import axios from 'axios'
import  NewsItem  from './NewsItem'
import { Content, Loading } from './newlist';
import InfiniteScroll from 'react-infinite-scroll-component';
//require('dotenv').config({ path: '../../.env' })
const PAGE_NUMBER = 1 ; 

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

 /*   const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    
        if (scrollHeight - scrollTop === clientHeight) {
          setPage(prev => prev + 1);
        }
      };*/
    


    const apiKey = "5d6344128e9843d38603f37aaf736308";


 /*   useEffect(() => {
        const getArticles = async () => {
            setLoading(true);

            const response = await axios.get(`https://newsapi.org/v2/everything?q=actualités&apiKey=${apiKey}&_limit=10`,
            {
                params:{page:page},
                
            }
            )
            setArticles((prev) => [...prev, ...response.data.articles]);
            setLoading(false);

          //  setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [page]) */

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

const getMore = async () => {
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
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}




        

                          </InfiniteScroll>

    )
}

export default NewsList;
