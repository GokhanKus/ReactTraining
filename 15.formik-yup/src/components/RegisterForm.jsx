import React from 'react'
import { useFormik } from 'formik';

function RegisterForm() {

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      term: ''
    },
  });

  return (
    <div>
      <form>
        <div className='input-div'>

          <label>Email</label>
          <input type='text' id='email' placeholder='Email Giriniz' value={values.email} onChange={handleChange} />

        </div>
        <div className='input-div'>
          <label>Age</label>
          <input type='number' id='age' placeholder='Yas Giriniz' value={values.age} onChange={handleChange} />
        </div>
        <div className='input-div'>
          <label>Password</label>
          <input type='password' id='password' placeholder='Sifre Giriniz' value={values.password} onChange={handleChange} />
        </div>
        <div className='input-div'>
          <label>Confirm Password</label>
          <input type='password' id='confirmPassword' placeholder='Sifre Dogrula' value={values.confirmPassword} onChange={handleChange} />
        </div>

        <div className='input-div'>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <input style={{ width: '20px', height: '12px' }} type='checkbox' id='term' placeholder='Sifre Dogrula' value={values.term} onChange={handleChange} />
            <label>Accept the Terms</label>
          </div>
        </div>
        <button className='submit-button' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default RegisterForm