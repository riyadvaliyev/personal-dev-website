import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p>
                Follow me on
                <span> </span>
                <a href="https://github.com/riyadvaliyev" target="_blank" rel="noopener noreferrer">GitHub</a> |  
                <span> </span>
                <a href="https://linkedin.com/in/riyad-valiyev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
        </footer>
    );
};

export default Footer;