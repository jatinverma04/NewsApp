import React, { useState, useEffect } from 'react';
import Newsitems from './Newsitems';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

const Newsbox = ({ catagory, mode, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setResults] = useState(0);

  const newsUpdate = async () => {
    setProgress(10);
    const url = `https://gnews.io/api/v4/top-headlines?category=${catagory}&lang=en&country=us&max=10&page=${page}&apikey=9cd9388c7c4aa28b811e09608fe9ddd3`;

    try {
      let data = await fetch(url);
      let parseData = await data.json();
      setProgress(50);

      setResults(parseData.totalResults);
      setArticles(parseData.articles || []); // Protect against undefined
      setProgress(100);
    } catch (error) {
      console.error('Error fetching news:', error);
      setProgress(100);
    }
  };

  useEffect(() => {
    newsUpdate();
    // eslint-disable-next-line
  }, [catagory, page]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://gnews.io/api/v4/top-headlines?category=${catagory}&lang=en&country=us&max=10&page=${page + 1}&apikey=9cd9388c7c4aa28b811e09608fe9ddd3`;

    try {
      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles || []));
      setResults(parseData.totalResults);
    } catch (error) {
      console.error('Error fetching more news:', error);
    }
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <Newsitems
                title={element.title || 'No Title'}
                description={element.description || 'No Description'}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                mode={mode}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

Newsbox.defaultProps = {
  catagory: 'general',
};

export default Newsbox;
