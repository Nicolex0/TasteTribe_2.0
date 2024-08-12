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
  












  return (
    <div></div>
        
  )
}

export default SignUp;