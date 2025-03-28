import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <a 
                    href='https://www.instagram.com/smtmovies?igsh=bW5sbzYwNmdnbW9h' 
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    <a
                    href='https://www.youtube.com/channel/UCKObXKDMTnmhFAyyut6TizQ' 
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                        Youtube
                    </a>
                    <a 
                    href='https://x.com/SMTmovie' 
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                        <i class="fa-brands fa-x-twitter" />
                    </a>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        SMT Films <i class="fa-solid fa-camera" />
                    </Link>
                </div>
                <small className='website-rights'>SMT Films © 2025</small>
                <div className='social-icons'>
                    <a 
                    className='social-icon-link instagram'
                    href='https://www.instagram.com/smtmovies?igsh=bW5sbzYwNmdnbW9h' 
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label='instagram'
                    >
                        <i className='fab fa-instagram' />
                    </a>
                    <a
                    className='social-icon-link youtube'
                    href='https://www.youtube.com/channel/UCKObXKDMTnmhFAyyut6TizQ' 
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label='youtube'
                    >
                        <i className='fab fa-youtube' />
                    </a>
                    <a 
                    className='social-icon-link twitter'
                    href='https://x.com/SMTmovie' 
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label='x-twitter'
                    >
                        <i className='fab fa-x-twitter' />
                    </a>
                </div>
            </div>
        </section>
        {/* add more to footer here 
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/films'>How it works</Link>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Footer