import React from 'react';
import './FilmsPage.css';

const FilmPageContent = ({ title, description, genre, director, cast, videoSrc }) => {
  return (
    <div className="fav-page">
      <div className="fav-content">
        {/* Video container */}
        <div className="fav-video-container">
          <div className="fav-ratio">
            <iframe
              src={videoSrc}
              title={title}
              allowFullScreen
              className="fav-video"
            />
          </div>
        </div>

        {/* Card with film details */}
        <div className="fav-card">
          <div className="fav-section fav-header">
            <h2 className="fav-title">{title}</h2>
          </div>

          <div className="fav-section fav-body">
            <p className="fav-description">
              Director's Notes: <br />
              {description}
            </p>
          </div>

          <div className="fav-section fav-footer fav-details">
            <div className="fav-genre">Genre: {genre}</div>
            <div className="fav-director">Director: {director}</div>
            <div className="fav-cast">Cast: {cast}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmPageContent;
