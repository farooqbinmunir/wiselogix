'use client';
import { useState } from 'react';
import { APIROUT, KEY, postData } from '../exports';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    your_name: '',
    phone_number: '',
    email: '',
    subject: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [response, setResponse] = useState('error');

  const handleChange = (e) => {
	const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  	const handleSubmit = async (data) => {
		const postEndpoint = `${APIROUT}fbm-form-submissions/v1/fbm-form/`;
		const res = await postData(postEndpoint, data);
		if(res === true){
			document.getElementById('reset').click();
			const form_fields = document.querySelectorAll('input[required], textarea');
			for(let i = 0; i < form_fields.length; i++){
				form_fields[i].value = '';
			}
			setResponseMessage('Thank you for your message, it has been sent successfully.');
			setResponse('data');
		}else{
			setResponseMessage(`Something missing or went wrong, please try again\n\nError: ${res}`);
			setResponse('error');
		}
  	};

  	return (
		<>
			<form className='nr-contact-form' onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(formData);
				}}>
				<div className='form-group group-name'>
					<label className='uppercase label-your-name' htmlFor="your_name">Your Name</label>
					<input type="text" id="your_name" className="your_name input" name="your_name" value={formData.name} onChange={handleChange} required />
				</div>
				<div className='form-group group-phone-number'>
					<label className='uppercase label-phone-number' htmlFor="phone_number">Phone Number</label>
					<input type="tel" id="phone_number" className="phone_number input" name="phone_number" value={formData.name} onChange={handleChange} required />
				</div>
				<div className='form-group group-email'>
					<label className='uppercase label-email' htmlFor="email">Email</label>
					<input type="email" id="email" className="email input" name="email" value={formData.email} onChange={handleChange} required autoComplete='off' />
				</div>
				<div className='form-group group-subject'>
					<label className='uppercase label-subject' htmlFor="subject">Subject</label>
					<input type="text" id="subject" className="subject input" name="subject" value={formData.name} onChange={handleChange} required />
				</div>
				<div className='form-group group-message'>
					<label className='uppercase label-message' htmlFor="message">Message</label>
					<textarea id="message" className="message input" name="message" rows="5" value={formData.message} onChange={handleChange}  autoComplete='off' />
				</div>
				<div className='form-group group-submit'>
					<input type="submit" id='submit' className="submit submit_btn uppercase" value="Send" />
					<input type="reset" id='reset' className="reset reset_btn uppercase" hidden value="Reset" />
				</div>
				{responseMessage && <p className={response == 'data' ? 'success-message response-message' : 'error-message response-message'}>{responseMessage}</p>}
			</form>
		</>
  	);
}
