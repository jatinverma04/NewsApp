import React, { useState, useEffect } from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';

const Newsbox = ({ catagory, mode, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = '9cd9388c7c4aa28b811e09608fe9ddd3'; // Your API Key

  const fetchNews = async () => {
    try {
      setProgress(10);
      setLoading(true);

      const url = `https://gnews.io/api/v4/top-headlines?category=${catagory}&lang=en&country=us&max=10&apikey=${apiKey}`;
      const res = await fetch(url);
      setProgress(40);
      const data = await res.json();
      setProgress(70);

      if (data.articles) {
        setArticles(data.articles);
      } else {
        console.error('API Error:', data);
      }

      setLoading(false);
      setProgress(100);
    } catch (err) {
      console.error('Fetch failed:', err);
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, [catagory]);

  return (
    <div className="container mt-4">
      <h2 className={`text-center text-${mode === 'light' ? 'dark' : 'light'}`}>Top Headlines - {catagory.charAt(0).toUpperCase() + catagory.slice(1)}</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          {Array.isArray(articles) && articles.length > 0 ? (
            articles.map((article) => (
              <div className="col-md-4" key={article.url}>
                <Newsitems
                  title={article.title || 'No Title'}
                  description={article.description || 'No Description'}
                  imageUrl={article.image}
                  newsUrl={article.url}
                  mode={mode}
                />
              </div>
            ))
          ) : (
            <p className={`text-center text-${mode === 'light' ? 'dark' : 'light'}`}>No articles found.</p>
          )}
        </div>
      )}
    </div>
  );
};

Newsbox.defaultProps = {
  catagory: 'general'
};

export default Newsbox;
