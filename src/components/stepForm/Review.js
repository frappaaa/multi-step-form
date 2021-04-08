import React from 'react';

export const Review = ({ formData, navigation }) => {
	const { go } = navigation;
	const { firstName, lastName, email } = formData;
	return (
		<>
			<h1>Review</h1>
			<RenderAccordion
				go={go}
				summary="Names"
				details={[
					{ 'First Name': firstName },
					{ 'Last Name': lastName },
					{ email: email }
				]}
			/>
		</>
	);
};

export const RenderAccordion = ({ summary, details, go }) => {
	return (
		<details>
			<summary>{summary}</summary>
			<div>
				{details.map((data, index) => {
					const objKey = Object.keys(data)[0];
					const objValue = data[Object.keys(data)[0]];
					return <p key={index}>{`${objKey}: ${objValue}`}</p>;
				})}
				<button onClick={() => go(`${summary.toLowerCase()}`)}>Modifica</button>
			</div>
		</details>
	);
};
