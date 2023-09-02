import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import './LoginPage.scss';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/authContext/authContext';


const LoginPage = ({ setIsSidebar }) => {

  const auth = useContext(AuthContext);

  useEffect(()=> {
    setIsSidebar(false);
  },[])
  

  const handleAuth = (e) => {
    e.preventDefault();
    auth.login();
  }
  
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
          <p className='auth__signup'>No Account Yet? <Link className='auth__link' to='/signup'>Sign Up</Link></p>
          <Button 
            text="LOGIN"
            buttonClass="auth__cta"
            onClick={handleAuth}
          />
        </div>
      </div>
    </section>
  )
}

export default LoginPage