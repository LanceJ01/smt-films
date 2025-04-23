import React from 'react';
import FilmPageContent from "../FilmPageContent";

const ADealWithAWitch = () => {
  return (
    <div className="fav-page">
      <div className="fav-content">
        <FilmPageContent
          title="A Deal With A Witch"
          description="A deal is struck, for what and why? Turn the page and find out!"
          genre="Thriller"
          director="Schyler Tobin"
          cast="Julia Tobin, Lance Aguilar, Sairy Tobin"
          videoSrc="https://www.youtube.com/embed/3ga0dsYM8WY?si=yU1P9TO2_elCVOme"
        />
      </div>
    </div>
  );
};

export default ADealWithAWitch;
