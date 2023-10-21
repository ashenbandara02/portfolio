import background from '../sources/bg1.png'
import technologies from '../techstackdata';
import Technologypreview from './technologypreviewer';

const PersonalBrief = () => {
    return (
            <div className="content-container-two">
                <div className="sub-content-container-two">
                    <img className='personal-brief-bgpic' src={background} alt='bg1.jpg' />
                    <div className='sub-content-container-two-sub'>
                        <div className='sub-content-container-two-sub-sub' id='scroll1'>
                            <h2 className='personal-brief-intro'>Hello, I'm Ashen Bandara,</h2>
                            <p className='personal-brief-desc'>a 21-year-old software engineer with a solid background in Python.
                                I've successfully delivered multiple freelancing projects, demonstrating my expertise
                                in coding since I started at 16. My passion for innovation drives me to continually explore
                                new technologies. Currently, I'm dedicated to advancing my skills as I work towards a specialized
                                degree in IT. I'm excited to see where this journey takes me next.
                            </p>
                        </div>
                    </div>
                    <div className='techstack'>
                        <div className='techstack-intro'>
                            <h2 className='techstack-intro-heading'>Tech<span>Stack</span></h2>
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className='techstack-all'>
                            {technologies.map(technology =>
                                <Technologypreview
                                    {...technology}
                                    key={technology.id}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default PersonalBrief;