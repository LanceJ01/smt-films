import React from 'react';
import { Link } from 'react-router-dom';
import '../FilmContent.css';

const videos = [
  {
    title: 'Feeding A Vampire',
    path: '/filmpages/feedingavampire',
    thumbnail: '/images/trailer-img.jpg',
    label: 'Thriller',
  },
  {
    title: 'A Deal With A Witch',
    path: '/filmpages/adealwithawitch',
    thumbnail: '/images/dealwitch-img.jpg',
    label: 'Thriller',
  }
];

export default function Films() {
  return (
    <div className='films-page'>
      <h1 className='films-title'>Films</h1>
      <div className='film-grid'>
        {videos.map((video, index) => (
          <Link to={video.path} key={index} className="film-card">
            <div className="film-card-inner">
              <div className="thumbnail-container">
                <img src={video.thumbnail} alt={video.title} className="film-thumbnail" />
                <div className="film-label">{video.label}</div>
              </div>
              <div className="film-title">{video.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
