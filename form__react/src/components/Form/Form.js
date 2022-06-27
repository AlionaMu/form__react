import React from 'react';
import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleInputName = ({ target }) => {
		setFormData({
			...formData,
			[target.name]: target.value,
		});
	};

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        your first name / second name
        <input
          type="text"
          placeholder='Enter name and surname'
          name='names'
          onChange={handleInputName}
        />
      </label>
      <label>
        your e-mail
        <input
          type="mail"
          placeholder='Enter e-mail'
          name='mail'
          onChange={handleInputName}
        />
      </label>
      <label>
        your phone number
        <input
          type="tel"
          placeholder='Enter phone number'
          name='phone'
          onChange={handleInputName}
        />
      </label>
      <label>
        your date of birth
        <input
          type="date"
          placeholder='Enter date of birth'
          name='birth'
          onChange={handleInputName}
        />
      </label>
      <label>
        your message
        <input
          type="text"
          placeholder='Write smth...'
          name='msg'
          onChange={handleInputName}
        />
      </label>
      <button className='form__button' onClick={console.log(formData)}>Submit</button>
    </form>
  )
}

export default Form;
