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
    <>
    <div className="min-h-screen bg-backgroundGreen flex flex-col items-center p-0 font-urbanist">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center mb-8 font-light">Any question or remarks? Just write us a message!</p>
      <main className="flex-grow w-full max-w-7xl mx-auto mt-5 mb-2.5 bg-white p-8 shadow-xl">
        <div className="flex space-x-8">
          {/* Contact Information Section */}
          <div className="w-1/2 h-screen bg-customGreen text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className='mb-4'>Say something to start a live chat!</p>
            <ul className="mt-40 space-y-10">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-xl text-white" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-xl text-white" />
                <span>tastetribe001@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-xl text-white" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-40">
              <a href="#" className="text-2xl text-white hover:text-blue-800">
                <FaFacebookF />
              </a>
              <a href="#" className="text-2xl text-white hover:text-blue-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl text-white hover:text-pink-800">
                <FaInstagram />
              </a>
            </div>
          </div>
            </div>
            </main>
            </div>
            
            

      
    </>
  )
}

export default ContactUs
