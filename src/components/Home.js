import React from 'react';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="container">
                <h1>Hello, I'm <span style={{color: 'var(--primary-color)'}}>Riyad</span></h1>
                <p>A passionate full-stack developer specializing in building exceptional digital experiences.</p>
                <div style={{margin: '2rem 0'}}>
                    <a href="#projects" style={{
                        background: 'var(--primary-color)',
                        color: 'white',
                        padding: '0.8rem 2rem',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        marginRight: '1rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                    }}>View My Work</a>
                    <a href="#contact" style={{
                        border: '1px solid white',
                        color: 'white',
                        padding: '0.8rem 2rem',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                    }}>Contact Me</a>
                </div>
                <div style={{marginTop: '2rem'}}>
                    <a href="https://github.com/riyadvaliyev" target="_blank" rel="noopener noreferrer" style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        margin: '0 1rem'
                    }}><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/riyad-valiyev" target="_blank" rel="noopener noreferrer" style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        margin: '0 1rem'
                    }}><i className="fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/riyadvaliyev" target="_blank" rel="noopener noreferrer" style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        margin: '0 1rem'
                    }}><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </section>
    );
};

export default Home;