import React from 'react';
import projectsData from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>My Projects</h2>
                <ul>
                    {projectsData.map((project, index) => (
                        <li key={index}>
                            <h3 style={{ fontSize: '1.1rem' }}>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;