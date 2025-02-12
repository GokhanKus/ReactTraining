import React from 'react'
import { useFormik } from 'formik';
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

function RegisterForm() {

  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000)
  }
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      term: ''
    },
    validationSchema: registerFormSchemas,
    onSubmit: submit
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-div'>
          <label>Email</label>
          <input type='text' id='email' placeholder='Email Giriniz' value={values.email} onChange={handleChange} />
          {errors.email && <p className='input-errors'>{errors.email}</p>}
        </div>
        <div className='input-div'>
          <label>Age</label>
          <input type='number' id='age' placeholder='Yas Giriniz' value={values.age} onChange={handleChange} />
          {errors.age && <p className='input-errors'>{errors.age}</p>}
        </div>
        <div className='input-div'>
          <label>Password</label>
          <input type='password' id='password' placeholder='Sifre Giriniz' value={values.password} onChange={handleChange} />
          {errors.password && <p className='input-errors'>{errors.password}</p>}
        </div>
        <div className='input-div'>
          <label>Confirm Password</label>
          <input type='password' id='confirmPassword' placeholder='Sifre Dogrula' value={values.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <p className='input-errors'>{errors.confirmPassword}</p>}
        </div>

        <div className='input-div'>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <input style={{ width: '20px', height: '12px' }} type='checkbox' id='term' placeholder='Sifre Dogrula' value={values.term} onChange={handleChange} />
            <label>Accept the Terms</label>
          </div>
          {errors.term && <p className='input-errors'>{errors.term}</p>}
        </div>
        <button type='submit' className='submit-button'>Submit</button>
      </form>
    </div>
  )
}

export default RegisterForm