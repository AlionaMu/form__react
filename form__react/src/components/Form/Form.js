import React from 'react';
import { useState } from 'react';
import { service } from '../../services/services';
import './Form.scss';

const Form = () => {
  const [formData, setFormData] = useState({
    "names":'',
    "mail":'',
    "phone":'',
    "birth": "",
    "msg": "",
  });
  const [info, setInfo] = useState('');
  const text = `${info}`;

  const handleInputName = ({ target }) => {
		setFormData({
			...formData,
			[target.name]: target.value,
		});
	};

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { names = '', mail = '', phone = '', birth = '', msg = '' } = formData;
		const result = await service.addUser('/users', { names, mail, phone, birth, msg });
		result.successful ? setInfo(result.json) : setInfo(`Статус ошибки ${result.status}`);
  };

  return (
    <div>
      <form className='form' onSubmit={ handleSubmit }>
        <label>
          your first name / second name
          <input
            type="text"
            placeholder='Enter name and surname'
            name='names'
            onChange={ handleInputName }
          />
        </label>
        <label>
          your e-mail
          <input
            type="mail"
            placeholder='Enter e-mail'
            name='mail'
            onChange={ handleInputName }
          />
        </label>
        <label>
          your phone number
          <input
            type="tel"
            placeholder='Enter phone number'
            name='phone'
            onChange={ handleInputName }
          />
        </label>
        <label>
          your date of birth
          <input
            type="date"
            placeholder='Enter date of birth'
            name='birth'
            onChange={ handleInputName }
          />
        </label>
        <label>
          your message
          <input
            type="text"
            placeholder='Write smth...'
            name='msg'
            onChange={ handleInputName }
          />
        </label>
        <button className='form__button'>Submit</button>
      </form>
      <p>{ text }</p>
    </div>
  )
}

export default Form;
