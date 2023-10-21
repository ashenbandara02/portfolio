import facebook from '../sources/socialmediaicons/facebook.png'
import whatsapp from '../sources/socialmediaicons/whatsapp.png'
import instagram from '../sources/socialmediaicons/instagram.png'
import linkedin from '../sources/socialmediaicons/linkedin.png'
import github from '../sources/socialmediaicons/github.png'
import gmail from '../sources/socialmediaicons/gmail.png'
import mypic from '../sources/mypic.png'

const DemoIntro = () => {
    function redirect(url){
        window.open(url, "_blank").focus();
    }

    return (
        <div className="content-container-one">
            <div className="sub-content-container-one">

                {/* <div className="icon-section-1">
                    <div className="icon-container" onClick={redirect("https://web.facebook.com/bod.2000")}>
                        <img src={facebook} className="floating-icon" />
                    </div>
                    <div className="icon-container">
                        <img src={whatsapp} className="floating-icon" />
                    </div>
                    <div className="icon-container">
                        <img src={gmail} className="floating-icon" />
                    </div>
                </div> */}
                

                {/* the picture of myself and little intro of me */}
                <div className='my-intro'>
                    <div id='intro-title'>
                        <h1>Software Engineer & Web Developer</h1>
                    </div>
                    <img id="mypic" src={mypic} alt='Ashens Pic'/>
                    <div id='intro-desc'>
                        <h4>A versatile Web Developer and Python Programmer, dedicated to creating innovative digital solutions and enhancing user experiences.</h4>
                    </div>
                </div>

                {/* <div className="icon-section-2">
                    <div className="icon-container">
                        <img src={instagram} className="floating-icon" />
                    </div>
                    <div className="icon-container">
                        <img src={linkedin} className="floating-icon" />
                    </div>
                    <div className="icon-container">
                        <img src={github} className="floating-icon" />
                    </div>
                </div> */}

            </div>
        </div>
    );
}

export default DemoIntro;