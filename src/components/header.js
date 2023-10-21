import { useState } from "react";
import mylogo from '../sources/logo.jpg'

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const scrollFunction1 = () => {
        let e = document.getElementById("scroll1");
        e.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'start'
        });
    }
    const scrollFunction2 = () => {
        let e = document.getElementById("scroll2");
        e.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'start'
        });
    }

    const scrollFunction3 = () => {
        let e = document.getElementById("project-highlight");
        e.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'start'
        });
    }

    return (
        <>
        <div className="header-container">
            <div className={`navbar ${showMenu ? 'responsive' : ''}`}>

                <div className="logo-pic-container">
                    <img id="logo-pic" src={mylogo} />
                </div>

                <div className="header-container-2">
                    <a href="#" onClick={scrollFunction3} id="links">Projects</a>
                    <a href="#" onClick={scrollFunction1} id="links">About</a>
                    <div className="orgresumebtn">
                        <a href="https://drive.google.com/file/d/10Y7ixiMwDWpIVNqDHeOxvnYDVUeK-L2B/view?usp=sharing" id="links" ><span id="resume">Resume</span></a>
                    </div>
                    <a href="#" onClick={scrollFunction2} id="links">Contact</a>
                    <a href="#" className="icon-dropdown" onClick={toggleMenu}>
                        &#9776;
                    </a>
                </div>
            </div>
            {showMenu && (
                <div className="dropdown">
                    <div id="dropped-item"><a href="#" onClick={scrollFunction3} id="dropped-per-item">Projects</a></div>
                    <div id="dropped-item"><a href="#" onClick={scrollFunction1}  id="dropped-per-item">About</a></div>
                    <div id="dropped-item"><a href="https://drive.google.com/file/d/10Y7ixiMwDWpIVNqDHeOxvnYDVUeK-L2B/view?usp=sharing" id="dropped-per-item"><span id="resume">Resume</span></a></div>
                    <div id="dropped-item"><a href="#" onClick={scrollFunction2} id="dropped-per-item">Contact</a></div>
                </div>
            )}
        </div>
        </>
    );
}

export default Header;