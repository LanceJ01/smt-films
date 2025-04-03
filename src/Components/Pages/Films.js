import React from 'react';
import '../../App.css';
import '../FilmContent.css'


export default function Films() {
    return (
        <div>
            <h1 className='films'>Films</h1>
            <div className='film__container'>
                <div className="ratio-container">
                    <iframe src="https://www.youtube.com/embed/oisUb702hkM?si=soHJmMVUquTnb7qi"
                            title="Feeding A Vampire" allowFullScreen></iframe>
                </div>
            </div>
            <div className='film__container'>
                <div className="ratio-container">
                    <iframe src="https://www.youtube.com/embed/3ga0dsYM8WY?si=yU1P9TO2_elCVOme"
                            title="A Deal With A Witch" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}