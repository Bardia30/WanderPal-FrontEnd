import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import './LoginPage.scss';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/authContext/authContext';
import axios from 'axios';



const LoginPage = ({ setIsSidebar, login }) => {
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  useEffect(()=> {
    setIsSidebar(false);
  },[])
  




  const handleAuth = (e) => {
    e.preventDefault();
  
    const password = e.target.userPassword.value;
    const email = e.target.userEmail.value;
    

    if (!password || !email ) {
      return alert("all fields must be completed");
    }


    const userLoginObj = {
      email: email, 
      password: password
    }



    axios.post('http://localhost:8080/user/login', userLoginObj)
      .then(res => {
        auth.login(res.data.userId);
        const userId = res.data.userId;
        login();
        setIsSidebar(true);
        navigate(`/${userId}/destinations`);
      })
      .catch(err => {
        console.log(err); 
        console.log(err.response.data);  
    });

    

  }
  
  return (
    <section className='auth'>
      <h1 className='auth__title'>Welcome Back to WonderPal</h1>
      <p className='auth__instructions'>Login, and continue your journey</p>
      <div className='auth__form-section'>
        <form onSubmit={handleAuth} className='auth__form' action="submit">  
          <InputField 
            type="email"
            inputClass="auth__input"
            placeholder="Email..."
            name="userEmail"
          />
          <InputField 
            type="password"
            inputClass="auth__input"
            placeholder="Password..."
            name="userPassword"
          />
          <div className='auth__buttons'>
          <p className='auth__signup'>No Account Yet? <Link className='auth__link' to='/signup'>Sign Up</Link></p>
          <Button 
            text="LOGIN"
            buttonClass="auth__cta"
            type="submit"
          />
        </div>
        </form>
        
      </div>
    </section>
  )
}

export default LoginPage