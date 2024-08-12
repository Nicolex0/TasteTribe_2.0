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
  return (
    <div></div>
        
  )
}

export default SignUp;