import React from 'react';

const Contact = () => {
    return (
     <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contacte-nos</h2>
      <p className="mb-8 lg:mb-16  text-center text-gray-500 dark:text-gray-400 sm:text-xl">Tem dúvidas acerca deste serviço? Entre em contacto connosco.</p>
      <form action="#" className="space-y-8">
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
              <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Deixe o seu nome" required/>
          </div>
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Deixe o seu email" required/>
          </div>
          <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mensagem</label>
              <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Como podemos ajudar?" required></textarea>
          </div>
          <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Send message</button>
      </form>
  </div>
</section>
    );
};

export default Contact;