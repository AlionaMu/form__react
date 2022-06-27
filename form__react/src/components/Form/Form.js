import React, { useEffect } from 'react';
import { useState } from 'react';
import { service } from '../../services/services';
import './Form.css';

const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
const regexp = new RegExp(/^[A-Za-z\s]{3,30}[A-Za-z]{3,30}$/);
const phoneReg = new RegExp(/^[0-9]{7,15}$/);

const Form = () => {
  const [names, setNames] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');
  const [msg, setMsg] = useState('');
  const [info, setInfo] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [names, mail, phone, birth, msg])

  
  const validate = () => {
    setErrors({});
    if (names === '') {
      setErrors((state) => ({...state.items, names}));
    }
    else if(mail === '') {
      setErrors((state) => ({...state.items, mail}));
    }
    else if (phone === '') {
      setErrors((state) => ({...state.items, phone}));
    }
    else if (birth === '') {
      setErrors((state) => ({...state.items, birth}));
    }
    else if (msg === '') {
      setErrors((state) => ({...state.items, msg}));
    }
  }

  const reset = () => {
    setNames('');
    setMail('');
    setPhone('');
    setBirth('');
    setMsg('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await service.addUser('/users', { names, mail, phone, birth, msg });
    console.log({ names, mail, phone, birth, msg })
    if (result.successful) {
      setInfo('Данные формы успешно отправлены');
      reset();
    } else {
      console.log(errors)
      setInfo(`Статус ошибки ${result.status}`);
    }
  };

  return (
    <div>
      <form className='form' onSubmit={ handleSubmit }>
        <label>
          Your name and surname
          <input
            type="text"
            placeholder="Enter name and surname"
            name="names"
            value={ names }
            onChange={(e) => setNames(e.target.value) }
          />
          <p>{errors.names === '' && <span className='error'> Name should be </span>} </p>
          <p>{!regexp.test(names) && <span className='error'> Should be no more than two words in the Latin alphabet with one space </span>} </p>
        </label>
        <label>
          Your mail
          <input
            type="mail"
            placeholder="Enter e-mail"
            name="mail"
            value={ mail }
            onChange={ (e) => setMail(e.target.value) }
          />
          <p>{errors.mail === '' && <span className='error'> Mail should be </span>} </p>
          <p>{!pattern.test(mail) && <span className='error'> Should looks like e-mail </span>} </p>
        </label>
        <label>
          Your phone number
          <input
            type="tel"
            placeholder='Enter phone number'
            name='phone'
            value={ phone }
            onChange={ (e) => setPhone(e.target.value) }
          />
          <p>{errors.phone === '' && <span className='error'> Phone number should be </span>} </p>
          <p>{!phoneReg.test(phone) && <span className='error'> Should be numbers </span>} </p>
        </label>
        <label>
          Your date of birth
          <input
            type="date"
            placeholder='Enter date of birth'
            name='birth'
            value={ birth }
            onChange={ (e) => setBirth(e.target.value) }
          />
          <p>{errors.birth === '' && <span className='error'> Date should be </span>} </p>
        </label>
        <label>
          Your message
          <input
            type="text"
            placeholder='Write smth...'
            name='msg'
            value={ msg }
            onChange={ (e) => setMsg(e.target.value) }
          />
          <p>{errors.msg === '' && <span className='error'> Write something </span>} </p>
          <p>{( msg.length < 10 || msg.length > 300 ) && <span className='error'> Message length should be 10 till 300 letters </span>} </p>
        </label>
        <button className='form__button'>Submit</button>
      </form>
      <p>{ info }</p>
    </div>
  )
}

export default Form;
