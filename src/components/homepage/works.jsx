import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./comentor.png"
								alt="comentor"
								className="work-image"
							/>
							<div className="work-title">Comentor</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Jan 2024 - March 2024</div>
						</div>

						<div className="work">
							<img
								src="./bangkit.jpg"
								alt="bangkit"
								className="work-image"
							/>
							<div className="work-title">Bangkit Academy</div>
							<div className="work-subtitle">
								Cloud Computing Cohort
							</div>
							<div className="work-duration">Sept 2024 - Dec 2024</div>
						</div>

						<div className="work">
							<img
								src="./bem.png"
								alt="bem"
								className="work-image"
							/>
							<div className="work-title">BEM KM FTI</div>
							<div className="work-subtitle">
								Governor
							</div>
							<div className="work-duration">Jan 2024 - Dec 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
