import React from 'react';

const Newsitems = ({ title, description, imageUrl, newsUrl, mode, source, publishedAt }) => {
  // Function to format the date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="my-3"> 
      <div className={`card bg-${mode} text-${mode === 'light' ? 'dark' : 'light'} border-${mode === 'light' ? 'dark' : 'light'}`} style={{ height: '100%' }}> 
        <span 
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
          style={{ zIndex: '1', left: '90%' }} 
        >
          {source || 'Unknown Source'}
        </span>
        <img 
          src={imageUrl || 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} 
          className="card-img-top" 
          alt="News" 
          style={{ maxHeight: '200px', objectFit: 'cover' }} 
        />
        <div className="card-body d-flex flex-column"> 
          <h5 className="card-title">{title ? title.slice(0, 50) : 'No Title'}...</h5>
          <p className="card-text">{description ? description.slice(0, 80) : 'No Description'}....</p> 
          <p className="card-text mt-auto"> 
            <small className={mode === 'light' ? 'text-muted' : 'text-light'}> 
              Published on {formatDate(publishedAt)}
            </small>
          </p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default Newsitems;
