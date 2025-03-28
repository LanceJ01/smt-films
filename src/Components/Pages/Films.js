import React from 'react';
import '../../App.css';
import '../FilmContent.css'


export default function Films() {
    return (
    <div>
        <h1 className='films'>Films</h1>
        <div className='film__container'>
            <div class="ratio-container">
                <iframe src="https://www.youtube.com/embed/oisUb702hkM?si=soHJmMVUquTnb7qi" title="Feeding A Vampire" allowFullScreen></iframe>
            </div>
        </div>
    </div>
    )
}