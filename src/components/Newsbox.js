import React, { useState, useEffect } from 'react';
import Newsitems from './Newsitems';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

const Newsbox = ({ category, mode, setProgress }) => { 
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setResults] = useState(0);
  const [loading, setLoading] = useState(true); 

  const newsUpdate = async (pageNum = 1) => {
    setProgress(10);
    setLoading(true);
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&page=${pageNum}&apikey=9cd9388c7c4aa28b811e09608fe9ddd3`;

    try {
      let data = await fetch(url);
      setProgress(30);
      let parseData = await data.json();
      setProgress(70);

      if (pageNum === 1) {
        setArticles(parseData.articles || []); 
      } else {
        setArticles(articles.concat(parseData.articles || [])); 
      }
      setResults(parseData.totalResults);
      setPage(pageNum); 

    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
      setProgress(100);
    }
  };

  useEffect(() => {
    setArticles([]); 
    setPage(1);      
    newsUpdate(1); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]); 

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&page=${nextPage}&apikey=${apiKey}`;

    try {
      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles || []));
      setResults(parseData.totalResults);
      setPage(nextPage); 
    } catch (error) {
      console.error('Error fetching more news:', error);
    }
  };

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
        NewsApp - Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines
      </h2>
      {loading && page === 1 && <Spinner />} 
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="row"> 
          {!loading || page > 1 ? (
             articles.map((element) => (
              <div className="col-md-4" key={element.url + Math.random()}> 
                <Newsitems
                  title={element.title || 'No Title'}
                  description={element.description || 'No Description'}
                  imageUrl={element.image} 
                  newsUrl={element.url}
                  mode={mode}
                  source={element.source.name} 
                  publishedAt={element.publishedAt} 
                />
              </div>
            ))
          ) : null} 
        </div>
      </InfiniteScroll>
    </div>
  );
};

Newsbox.defaultProps = {
  category: 'general', 
};

export default Newsbox;
