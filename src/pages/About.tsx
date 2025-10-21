import { API_ENDPOINT } from '../constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink
} from "@fortawesome/free-solid-svg-icons";
const About = () => {
    return (
 <section className="bg-white">
  <div className="max-w-[920px] my-6 mx-auto p-5  flex flex-col">
       <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Sobre a RecibosMCX</h2>
       <p className=" text-gray-800 text-[16px] mt-3">A RecibosMCX é uma plataforma de validação de comprovativos de transferências bancárias emitidas pelo aplicativo MULTICAIXA EXPRESS. O mesmo é um projecto pessoal que visa ser um ponto de referência na autenticidade de comprovativos a fim de evitar prejuízos fruto de transferências falsas e desonestas.</p>
       <p className=' text-gray-800 mt-4'>Pretendemos prestar um serviço de qualidade de forma rápida, simples e totalmente confiável. A validação de comprovativos é gratuita e de acesso livre, não sendo necessário qualquer tipo de registo ou autenticação para a sua utilização.</p>
        
        <h2 className=' text-gray-800 text-[24px] mt-6'> <b>Como funciona?</b></h2>
        <ul className=" text-gray-800 list-image-[url(./assets/images/list-icon.png)] space-y-4 mt-4 text-[#333]  list-disc list-inside">
        <li>
         <b>Adicionar documento</b>
          <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Na página inicial, navegar até a sessão <b>Adicionar comprovativo</b>.</li>
            <li>Em seguida selecionar a opção 'Escolher ficheiro', selecionar o comprovativo por validar, somente documentos em formato <b>.PDF</b> com um tamanho inferior a <b>2MB</b> serão validados.</li>
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
        <h2 className=' text-gray-800 text-[24px] mt-6' id="webservice"> <b>Webservice</b></h2>
          <p className="mb-2 text-gray-800 text-[16px] mt-3">Oferecemos um serviço de integração para agilizar o processo de validação de comprovativos com a nossa plataforma, o mesmo dispõe de alta disponibilidade e baixa latência.</p>
            <p>
            <FontAwesomeIcon icon={faExternalLink} />&nbsp;
             <a href={API_ENDPOINT + "/swagger"} target="_blank">
                  <b>{API_ENDPOINT + "/swagger"}</b>
                </a>
          </p>
    </div>
  </section>
    );
};
export default About;