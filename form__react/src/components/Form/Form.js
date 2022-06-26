import React from 'react';
import './Form.css';

const Form = () => {
   
    return (
      <form className='form'>
        <label>
          your first name / second name
          <input
            type="email"
            value='enter your first name and second name'
            onChange={e => { console.log( e.target.value) }}
          />
        </label>
        <label>
          your e-mail
          <input
            type="mail"
            value='enter e-mail'
            onChange={e => { console.log( e.target.value) }}
          />
        </label>
        <label>
          your phone number
          <input
            type="tel"
            value='enter phone number'
            onChange={e => { console.log( e.target.value) }}
          />
        </label>
        <label>
          your date of birth
          <input
            type="date"
            value='enter date of your birth'
            onChange={e => { console.log( e.target.value) }}
          />
        </label>
        <label>
          your message
          <input
            type="text"
            value='write smth...'
            onChange={e => { console.log( e.target.value) }}
          />
        </label>
      </form>
    )
}

export default Form;
