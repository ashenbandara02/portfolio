import mypic2 from '../sources/mypic2.jpg';

const MoreAbout = () => {
    return (
        <div className="content-container-four">
            <div className='content-container-four-h2'>
                <h2>More about me...&#128512;</h2>
            </div>
            
            <div className="sub-content-container-four">
                <img className="about-pic-2" src={mypic2} alt="kickboxing-group-pic" />
                <div className="about-details-2">
                I'm a passionate martial artist who embarked on my journey at the age of 10, practicing Karate with unwavering dedication. Over the past three years, I've ventured into the world of Kickboxing, embracing the discipline and challenge it brings. In addition to my martial arts pursuits, I find joy in competing, whether it's in the dojo or coding competitions. My love for programming, coupled with my enthusiasm for watching movies, serves as a creative outlet for me. Nature calls to me, and I answer by going on hikes, connecting with the great outdoors. Music is a constant companion, fueling my motivation and inspiring me to push my limits.
                </div>
            </div>

            <section className='section-x'>
                <div className='contact-me' id='scroll2'>
                    <div className='sub-contact-me'>
                        <div className='c'>
                            <h1>Collaborate</h1>
                        </div>
                        <div className='c'>
                            <p>Hire Me or Work With me towards an exciting journey together !</p>
                        </div>
                        <div className='c' id='c3'>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bandaraashen02@gmail.com">Email Me</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MoreAbout;