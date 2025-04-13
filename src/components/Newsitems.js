import React from 'react';

const Newsitems = ({ title, description, imageUrl, newsUrl, mode }) => {
  return (
    <div className="mt-3 mb-3">
      <div className={`card bg-${mode} text-${mode === 'light' ? 'dark' : 'light'} border-${mode === 'light' ? 'dark' : 'light'}`}>
        <img
          src={imageUrl || 'https://via.placeholder.com/300x180?text=No+Image'}
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}...</h5>
          <p className="card-text">{description.slice(0, 50)}....</p>
          <a href={newsUrl} target="__blank" className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Newsitems;
