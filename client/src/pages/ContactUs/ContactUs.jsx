import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const ContactUs = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    inquiryType: '',
    message: '',
  });
  console.log(`This is state 1 :${formData}`)

  // State to manage form submission status and message
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  return (
    <div>
      
    </div>
  )
}

export default ContactUs
