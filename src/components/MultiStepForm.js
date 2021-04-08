import { useForm, useStep } from 'react-hooks-helper';
import { Names } from './stepForm/Names';
import { Address } from './stepForm/Address';
import { Contact } from './stepForm/Contact';
import { Map } from './stepForm/Map';
import { Review } from './stepForm/Review';
import { Submit } from './stepForm/Submit';

const defaultData = {
	firstName: '',
	lastName: '',
	email: ''
};

const steps = [
	{ id: 'names' },
	{ id: 'review' },
	{ id: 'address' },
	{ id: 'contact' },
	{ id: 'map' },
	{ id: 'review' },
	{ id: 'submit' }
];

export const MultiStepForm = () => {
	const [formData, setForm] = useForm(defaultData);
	const { step, navigation } = useStep({
		steps,
		initialStep: 0
	});

	const props = { formData, setForm, navigation };

	switch (step.id) {
		case 'names':
			return <Names {...props} />;
		case 'address':
			return <Address {...props} />;
		case 'contact':
			return <Contact {...props} />;
		case 'map':
			return <Map {...props} />;
		case 'review':
			return <Review {...props} />;
		case 'submit':
			return <Submit {...props} />;
	}

	return (
		<div>
			<h1>Multi Step Form</h1>
		</div>
	);
};
