import React from 'react';
import '../styles/homepage.css';
import photo from '../assets/profile_photo.jpg';
import linkedinIcon from '../assets/linkedin.png';
import mailIcon from '../assets/mail.png';
import githubIcon from '../assets/github.png';
import whatsappIcon from '../assets/whatsapp.png';

function Homepage() {
    return (
        <div className="App">
        <header>
            <h1 className='header'>Home.</h1>
        </header>

        <main>
            <div className="content">
            <div className="profile">
                <img className='profilephoto' src={photo} alt="Profile Image" />
                <div className="icons">
                    <a href="https://www.linkedin.com/in/roman-gurung/" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="mailto:romang2103@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={mailIcon} alt="Gmail" />
                    </a>
                    <a href="https://github.com/romang2103" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="tel:+447737746211" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={whatsappIcon} alt="WhatsApp" />
                    </a>
                </div>
            </div>
            <div className="paragraph">
                <p>Hi my name is Roman Gurung, a second-year computer science student currently looking for a placement in a the field of tech for my penultimate year of university.</p>
            </div>
            </div>
        </main>
        </div>
    );
}

export default Homepage;

