import React, { useState } from 'react';
import githubIcon from '../assets/github.png';

function Project(props) {


    
    return(
        <div className='project'>
            <img className='project-img' src={githubIcon}></img>
            <div className='project-context'>
                <p>This a test context for a project component</p>
            </div>
        </div>
    )   
}

export default Project;