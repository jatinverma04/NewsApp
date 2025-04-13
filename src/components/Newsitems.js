import React from 'react';

const Newsitems = ({ title, description, imageUrl, newsUrl, mode }) => {
  return (
    <div className="mt-3 mb-3">
      <div className={`card bg-${mode} text-${mode === 'light' ? 'dark' : 'light'} border-${mode === 'light' ? 'dark' : 'light'}`}>
        <img src={imageUrl || 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}...</h5>
          <p className="card-text">{description.slice(0, 50)}....</p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default Newsitems;
