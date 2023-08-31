import React from 'react';
import '../styles/projects.css';
import Project from '../components/project';

function Projects() {
    return (
        <div className="App">
        <header>
            <h1 className='header'>Projects.</h1>
        </header>

        <main>
            <Project />
            <Project />
            <Project />
        </main>
        </div>
    );
}

export default Projects;

