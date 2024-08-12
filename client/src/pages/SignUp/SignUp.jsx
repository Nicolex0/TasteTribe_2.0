import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscLockSmall } from "react-icons/vsc";
import { TbEyeClosed } from "react-icons/tb";
import { RiEyeCloseFill } from "react-icons/ri";
import { auth } from '../../firebase'; // Import auth from your firebase.js
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'; // Import Firebase methods
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // New state for alert visibility
  const [verificationEmailSent, setVerificationEmailSent] = useState(false); // New state for email verification status

  
    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setShowPassword(false);
    setShowConfirmPassword(false);
    setError('');
    setPasswordError('');
    setEmailError('');
    setVerificationEmailSent(false);
  };
  const handleSignUp = async () => {
    setError('');
    setPasswordError('');
    setEmailError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Send email verification
      await sendEmailVerification(user);

      // User successfully signed up and verification email sent
      setShowSuccessAlert(true); // Show success alert
      setVerificationEmailSent(true); // Indicate email verification sent
      resetForm(); // Clear form fields
      console.log("User signed up successfully and verification email sent");
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setEmailError("The email address is already in use proceed to login");
      } else {
        setError(error.message);
      }
    }
  };


  const SuccessAlert = () => (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-3 rounded-md border-l-4 border-green-500 bg-green-50 max-w-2xl mx-auto shadow-lg z-50">
      <div className="flex justify-between">
        <div className="flex">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="self-center ml-3">
            <span className="text-green-600 font-semibold">
              Success
            </span>
            <p className="text-green-600 mt-1">
              {verificationEmailSent ? "Account has been created successfully. Please check your email to verify your account." : "Account has been created successfully."}
            </p>
          </div>
        </div>
        <button className="self-start text-green-500" onClick={() => setShowSuccessAlert(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
  












  return (
    <div></div>
        
  )
}

export default SignUp;