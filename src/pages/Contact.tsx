import React, { useState } from 'react';
import axios from "axios";
const Contact = () => {


const [formData, setFormData] = useState({ name: '', email: '', message:'' });
    const [errors, setErrors] = useState({});
 
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await fetch('https://recibosmcx.bsite.net/RecibosMCX/sendemail', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };







    return (
        //Add dark:text - to all text classes to provide dark mode support
     <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 -white">Contacte-nos</h2>
      <p className="mb-8 lg:mb-16  text-center text-gray-500 -gray-400 sm:text-xl">Tem dúvidas acerca deste serviço? Entre em contacto connosco.</p>
      <form onSubmit={handleSubmit} className="space-y-8">


          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 -gray-300">Nome</label>
              <input type="text" id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 -white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Deixe o seu nome" required/>
          </div>
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 -gray-300">Email</label>
              <input type="email" id="email" name="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 -white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Deixe o seu email" required/>
          </div>
          <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-gray-900 -gray-400">Mensagem</label>
              <textarea id="message" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 -white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Como podemos ajudar?" required></textarea>
          </div>
          <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 -white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Send message</button>
      </form>
  </div>
</section>
    );
};

export default Contact;