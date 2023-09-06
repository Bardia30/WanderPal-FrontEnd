import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import './LoginPage.scss';
import { useContext, useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/authContext/authContext';
import axios from 'axios';

const SignUpPage = ({ setIsSidebar, login }) => {
  
  const navigate = useNavigate();

  const filePickerRef = useRef();


  const auth = useContext(AuthContext);

  useEffect(() => {
    setIsSidebar(false);
  }, [])


  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   auth.signup();
  // }

  const [isUploaded, setIsUploaded] = useState(false);


  

  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState(false)
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    // setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setPasswordConfirmMessage(true);
    } else {
      setPasswordConfirmMessage(false);
    }
  }




  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    
    const password = e.target.userPassword.value;
    const email = e.target.userEmail.value;
    const passwordConfirm = e.target.userPasswordConfirm.value;

    

    if (!userName || !password || !email || !passwordConfirm) {
      return alert("all fields must be completed");
    }

    

    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', userName);
    formData.append('password', password);
    formData.append('image', file)

    //add isUploaded

    if (!isUploaded) {
      return alert("Please upload a picture");
    }

    if (passwordConfirmMessage) {
      return alert("Passwords do not match")
    } 

    


    axios.post('http://localhost:8080/user/signup', formData)
      .then(res => {
        console.log(res)
        auth.login(res.data.id);
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

  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  
  useEffect(()=> {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    }
    fileReader.readAsDataURL(file);


  }, [file])


   
  const handleImageUpload = (e) => {
    e.preventDefault();
    filePickerRef.current.click();
  }


  const pickedChangeHandler = (e) => {
    if (e.target.files && e.target.files.length === 1) {
      const pickedFile = e.target.files[0];
      setFile(pickedFile);
      setIsUploaded(true);
      
      return;
    }  else {
      setIsUploaded(false);
    }
  }

  const handleCancelButton = (e) => {
    e.preventDefault();
    setFile(null);               
    setIsUploaded(false);       
    setPreviewUrl(null);        

    
    if (filePickerRef.current) {
      filePickerRef.current.value = "";
    }
  }

  return (
    <section className='auth'>
      <h1 className='auth__title'>Welcome to WonderPal</h1>
      <p className='auth__instructions'>Sign up, and Begin Your Journey</p>
      <div className='auth__form-section auth__form-section--signup'>
        <form onSubmit={handleSignUpSubmit} className='auth__signup-form' action="submit">
          <div className='auth__upper-section'>
            <div className='auth__left-section'>
              <InputField
                type="text"
                inputClass="auth__input"
                placeholder="Name..."
                name="userName"
              />
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
                name='userPassword'
                onChange={handlePasswordChange}
              />
              <InputField
                type="password"
                inputClass="auth__input"
                placeholder="Confirm Password..."
                name="userPasswordConfirm"
                onChange={handleConfirmPasswordChange}
              />
              {passwordConfirmMessage && <p className='auth__password-match'>Passwords do not match</p>}
            </div>
            <section className='auth__right-section'>
            <input onChange={pickedChangeHandler} ref={filePickerRef} type="file" accept='.jpg, .png, .jpeg' style={{display: 'none'}}/>
              <h3 className='auth__upload-instructions'>Upload your Profile Picture</h3>
              {previewUrl ?
                <img className='auth__user-pic' src={previewUrl} alt="user-pic" /> :
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
                  onClick={handleImageUpload}
                />
              </div>
            </section>
          </div>

          <div className='auth__buttons'>
            <p className='auth__signup'>Already Signed Up? <Link className='auth__link' to='/login'>Login</Link></p>
            <Button
              text="SIGN UP"
              type="submit"
              buttonClass="auth__cta"
            />
          </div>
        </form>

      </div>
    </section>
  )
}

export default SignUpPage