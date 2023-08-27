import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import './LoginPage.scss';
import { useEffect } from 'react';

const LoginPage = ({ setIsSidebar }) => {
  
  useEffect(()=> {
    setIsSidebar(false);
  },[])
  
  
  return (
    <section className='auth'>
      <h1 className='auth__title'>Welcome Back to WonderPal</h1>
      <p className='auth__instructions'>Login, and continue your journey</p>
      <div className='auth__form-section'>
        <form className='auth__form' action="submit">  
          <InputField 
            type="email"
            inputClass="auth__input"
            placeholder="Email..."
          />
          <InputField 
            type="password"
            inputClass="auth__input"
            placeholder="Password..."
          />
        </form>
        <div className='auth__buttons'>
          <p className='auth__signup'>No Account Yet? <a className='auth__link' href="">Sign Up</a></p>
          <Button 
            text="LOGIN"
            buttonClass="auth__cta"
            onClick={()=>{}}
          />
        </div>
      </div>
    </section>
  )
}

export default LoginPage