import React from 'react';

export const Names = ({ formData, setForm, navigation }) => {
	const { firstName, lastName, email } = formData;
	return (
		<>
			<h1>Names</h1>
			<input
				name="firstName"
				type="text"
				value={firstName}
				onChange={setForm}
			/>
			<input name="lastName" type="text" value={lastName} onChange={setForm} />
			<input name="email" type="email" value={email} onChange={setForm} />
			<input type="button" onClick={() => navigation.next()} value="Prossimo" />
		</>
	);
};
