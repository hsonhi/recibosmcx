import React from 'react';

const About = () => {
    return (
       <div className="mt-8 px-4 mx-auto max-w-[920px] ">
        <h2 className='text-[24px]'> <b>Sobre a RecibosMCX </b></h2>
          <p className="text-[16px] text-[#333] font-normal mt-3">A RecibosMCX é uma plataforma de validação de comprovativos de transferências bancárias emitidas pelo aplicativo MULTICAIXA EXPRESS. O mesmo é um projecto pessoal que visa ser um ponto de referência na autenticidade de comprovativos a fim de evitar prejuízos fruto de transferências falsas e desonestas.</p>
          <p className='mt-4'>Pretendemos prestar um serviço de qualidade e confiança  de forma rápida, simples e totalmente confiável. A plataforma RecibosMCX é gratuita e de acesso livre, não sendo necessário qualquer tipo de registo ou autenticação para a sua utilização.</p>
        
        <h2 className='text-[24px] mt-6'> <b>Como funciona?</b></h2>
        <ul className="list-image-[url(./assets/images/list-icon.png)] space-y-4 mt-4 text-[#333]  list-disc list-inside dark:text-gray-400">
        <li>
         <b>Adicionar documento</b>
          <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Na página inicial, navegar até a sessão <b>Adicionar documento</b>.</li>
            <li>Em seguida selecionar a opção 'Escolher ficheiro', selecionar o comprovativo por validar, somente documentos em formato <b>.PDF</b> com um tamanho inferior a <b>2MB</b>.</li>
            <li>Em seguida clicar em validar.</li>
          </ol>
        </li>
        <li>
        <b>Validação</b>
        <ul className="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>O processo de validação passa pela verificação da autenticidade da assinatura e a integridade do documento usando a chave pública do signatário para descriptografar o <b>hash</b> e compará-lo com um novo hash calculado a partir do documento recebido. Esse processo <b>criptográfico</b> garante que a assinatura seja genuína e que o documento não tenha sido alterado desde a assinatura.</li>
            <li>Após o processo de validação o resultado da autenticidade do documento é apresentado na tela do usuário.</li>
        </ul>
        </li>
        </ul>

        <h2 className='text-[24px] mt-6'> <b>Webservice</b></h2>
          <p className="text-[16px] text-[#333] font-normal mt-3">Oferecemos uma API de forma gratuita para automatizar tarefas extensas, o mesmo dispõe de alta disponibilidade e baixa latência para demandas exigentes.</p>
        </div>
    );
};

export default About;