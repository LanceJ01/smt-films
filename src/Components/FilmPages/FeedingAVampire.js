import React from 'react';
import FilmPageContent from "../FilmPageContent";

const FeedingAVampire = () => {
  return (
    <div className="fav-page">
      <div className="fav-content">
        <FilmPageContent
          title="Feeding A Vampire"
          description="Fun fact, our audio is missing because I realized too late that our microphone needed batteries. None the less, I hope you enjoy the first of many film projects."
          genre="Thriller"
          director="Schyler Tobin"
          cast="Julia Tobin, Lance Aguilar, Sairy Tobin, John 'Jimmy' Addington"
          videoSrc="https://www.youtube.com/embed/oisUb702hkM?si=soHJmMVUquTnb7qi"
        />
      </div>
    </div>
  );
};

export default FeedingAVampire;
