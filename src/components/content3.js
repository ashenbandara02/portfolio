import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { moviesmart, trafficreport } from '../projects';
import github from '../sources/socialmediaicons/github.png'

const divStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundSize: 'cover',
	height: '300px',
	width: '100%'
}

const Slideshow = () => {
	return (
		<div className="content-container-three">
			<h1><span id='project-highlight'>Projects</span> I've Worked On...</h1>

			{/* first project */}
			<div className='per-project'>
				<div className="slide-container">
					<Slide>
						{trafficreport.map((slideImage, index) => (
							<div key={index}>
								<div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
								</div>
							</div>
						))}
					</Slide>
				</div>

				<div className='per-project-details'>
					<h2>{trafficreport[0].name}</h2>
					<p>{trafficreport[0].caption}</p>
					<div id='hyperlinks-project'>
						<a href={trafficreport[0].github} id='project-h-1'><img src={github}/></a>
						<a href={trafficreport[0].livedemo} id='project-h-2'>Live Demo</a>
						
					</div>
					<div id='per-project-details-tech'>
						<p>Technologies Used</p>
						<span>
							{(trafficreport[0].technologies).map((tech) => (
								<img className="per-project-details-tech-pic" src={tech} />
							))}
						</span>
					</div>
				</div>


			</div>
			{/* secound project */}
			<div className='per-project'>
				<div className="slide-container">
					<Slide>
						{moviesmart.map((slideImage, index) => (
							<div key={index}>
								<div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
								</div>
							</div>
						))}
					</Slide>
				</div>

				<div className='per-project-details'>
					<h2>{moviesmart[0].name}</h2>
					<p>{moviesmart[0].caption}</p>
					<div id='hyperlinks-project'>
						<a href={moviesmart[0].github} id='project-h-1'><img src={github}/></a>
						<a href={moviesmart[0].livedemo} id='project-h-2'>Live Demo</a>
						
					</div>
					<div id='per-project-details-tech'>
						<p>Technologies Used</p>
						<span>
							{(moviesmart[0].technologies).map((tech) => (
								<img className="per-project-details-tech-pic" src={tech} />
							))}
						</span>
					</div>
				</div>


			</div>
			
			{/* add more projects as you wish */}
			


		</div>
	)
}

export default Slideshow;