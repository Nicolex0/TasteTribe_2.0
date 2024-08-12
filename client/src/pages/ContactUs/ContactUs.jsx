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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a new object with form data
    const newFormData = {firstName:formData.firstName, lastName:formData.lastName, email:formData.email, phoneNumber:formData.phoneNumber, inquiryType:formData.inquiryType, message:formData.message }
    console.log(`This is state 3 :${newFormData}`)
    try {
        // Send POST request to the server
        await fetch('http://localhost:8080/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFormData),
            
        })
        .then((r) => r.json())
        .then((data) => {() => setSubmitMessage(data)});


        // Set submission status and reset form
        setIsSubmitted(true);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            inquiryType: '',
            message: '',
        });
    } catch (error) {
        // Handle errors
        setSubmitMessage('Failed to send message.');
        console.error('There was an error!', error);
    }
};
  return (
    <div>
      
    </div>
  )
}

export default ContactUs
