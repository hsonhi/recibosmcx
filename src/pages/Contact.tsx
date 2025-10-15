import React, { useState } from 'react';
import axios from "axios";
import { API_ENDPOINT } from '../constants';

const Contact = () => {
    const [responsemsg, setResponsemsg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
 
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setTimeout(() => {
        setResponsemsg(true);
        setName('');
        setEmail('');
        setMessage('');
      }, 1000);
    

     const resp = await axios
      .post(API_ENDPOINT+"/RecibosMCX/contactus", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: null,
        },
      })
      .then((response) => {
        //log response
      })
      .catch((error) => {
          //log error
      });
  };
    return (
        //Add dark:text - to all text classes to provide dark mode support
  <section className="bg-white dark:bg-gray-900">
  <div className="max-w-[920px] my-6 mx-auto p-5  flex flex-col">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 -white">Contacte-nos</h2>
      <p className="mb-8 lg:mb-16  text-center text-gray-500 -gray-400 sm:text-xl">Tem dúvidas acerca deste serviço? Entre em contacto connosco.</p>
      <form onSubmit={handleSubmit} className="space-y-8">
          {responsemsg ? (
            <div className="mt-3   p-[10px] gap-1 px-3 rounded-[10px] transition-all border-[#343437] text-[#fff] bg-[rgba(50,205,50,0.88)]">
                 <span>Agradecemos pelo seu contacto.</span>
            </div>
       ) : null}
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 -gray-300">Nome</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 -white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Deixe o seu nome" required/>
          </div>
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 -gray-300">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 -white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Deixe o seu email" required/>
          </div>
          <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-gray-900 -gray-400">Mensagem</label>
              <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 -white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Como podemos ajudar?" required></textarea>
          </div>
          <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 -white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Enviar mensagem</button>
         </form>
  </div>
</section>
    );
};

export default Contact;