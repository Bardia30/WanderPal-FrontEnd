import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import './LoginPage.scss';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/authContext/authContext';
import userPic from '../assets/userPic.png';

const SignUpPage = ({ setIsSidebar }) => {
  
  const auth = useContext(AuthContext);

  useEffect(()=> {
    setIsSidebar(false);
  },[])
  

  const handleSignup = (e) => {
    e.preventDefault();
    auth.signup();
  }
  
  const [isUploaded, setIsUploaded] = useState(false);
  

  const handleCancelButton = () => {

  }


  const handleUpload = () => {

  }
  
  return (
    <section className='auth'>
      <h1 className='auth__title'>Welcome to WonderPal</h1>
      <p className='auth__instructions'>Sign up, and Begin Your Journey</p>
      <div className='auth__form-section auth__form-section--signup'>
        <form className='auth__signup-form' action="submit">  
          <div className='auth__upper-section'>
            <div className='auth__left-section'>
              <InputField 
                type="text"
                inputClass="auth__input"
                placeholder="Name..."
              />
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
              <InputField 
                type="password"
                inputClass="auth__input"
                placeholder="Confirm Password..."
              />
            </div>
            <section className='auth__right-section'>
              <h3 className='auth__upload-instructions'>Upload your Profile Picture</h3>
              {isUploaded ? 
                <img className='auth__user-pic' src={userPic} alt="user-pic" /> :
                <div className='auth__user-pic-placeholder'>
                  <h3 className='auth__user-pic-upload-text'>Upload Your Photo</h3>
                </div>
              }
              <div className='auth__upload-buttons'>
                <Button 
                  text='cancel'
                  buttonClass='auth__cancel-cta'
                  onClick={handleCancelButton}
                />
                <Button 
                  text='Upload'
                  buttonClass='auth__upload-cta'
                  onClick={handleUpload}
                />
              </div>          
            </section>
          </div>
          
          <div className='auth__buttons'>
            <p className='auth__signup'>Already Signed Up? <Link className='auth__link' to='/login'>Login</Link></p>
            <Button 
              text="SIGN UP"
              buttonClass="auth__cta"
              onClick={handleSignup}
            />
        </div>
        </form>
        
      </div>
    </section>
  )
}

export default SignUpPage