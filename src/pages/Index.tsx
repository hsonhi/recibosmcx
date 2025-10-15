import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import webserviceImg2 from "../assets/images/mxexpress.png";
import QrImg from "../assets/images/qr.png";
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink,
  faCheckDouble,
  faTimes,
  faSpinner,
  faTimesCircle,
  faBars
} from "@fortawesome/free-solid-svg-icons";

const UPLOAD_ENDPOINT = "https://recibosmcx.bsite.net";



function Home() {
  const [file, setFile] = useState<any>(null);
  const [status, setStatus] = useState("Documento inválido!");
  const [data, setPosts] = useState([]);
  const [Date, setDate] = useState("");
  const [Signer, setSigner] = useState("");
  const [Algorithm, setAlgorithm] = useState("");
  const [isNotFoundVisible, setisNotFoundVisible] = useState(false);
  const [isFoundVisible, setisFoundVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [requests, setRequests] = useState(0);


const itemArray = [
  { title: 'Início', url: './' },
  { title: 'Sobre Nós', url: '/about' },
  { title: 'Contactos', url: '/contact' },
];

 const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    setStatus(""); 
    event.preventDefault();
    setIsLoading(true);
    setisFoundVisible(false);
    setisNotFoundVisible(false);
    const formData = new FormData();
    formData.append("file", file);

    


    const resp = await axios
      .post(UPLOAD_ENDPOINT + "/RecibosMCX/validate", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: null,
        },
      })
      .then((response) => {
        setIsLoading(false);
        setPosts(response.data.signer);
        setSigner(
          response.data.signer.info
            ? response.data.signer.info
            : null
        );
        setDate(response.data.signer.date);
        setAlgorithm(response.data.signer.encryptionAlgorithm);
        setisFoundVisible(response.data.signer.info ? true : false);
        setisNotFoundVisible(response.data.signer.info ? false : true);
        setStatus("Documento inválido!");
        fetchData();
      })
      .catch((error) => {
        setIsLoading(false);
        setPosts(error.response.data);
        setisFoundVisible(false);
        setisNotFoundVisible(true);
        setStatus(error.response.data);
      });
  };

  //useEffect(() => {
  // This effect runs once after the initial render (like componentDidMount)
  // and whenever its dependencies change (empty array means no dependencies, so it runs only once)
  const fetchData = async () => {
    const response = await fetch(UPLOAD_ENDPOINT + "/RecibosMCX/requests");
    const data = await response.json();
    setRequests(data.length); 
  };
  fetchData(); 
  //}, []); // Empty dependency array ensures this effect runs only once after initial render


  return (
    <div className="mt-8 px-4">
     {/* <p className="mx-auto max-w-[920px] text-[16px] text-center text-[#333] font-normal mt-3">
        A RecibosMCX é uma plataforma de validação de comprovativos de transferências bancárias emitidas pelo aplicativo MULTICAIXA EXPRESS.</p> 
     */}
     <main className="text-center max-w-[920px] border my-6 mx-auto p-5 bg-[#222124] flex flex-col rounded-[10px]">
        <div>
          <h1 className="text-[24px] text-[#ddd] font-medium">
            Adicionar documento
          </h1>
            <h1 className="text-3xl font-bold text-center text-up mt-2">
      <img src={webserviceImg2} alt="MCX Express" className=" inline" width={64} />
     
      </h1>
        </div>
        <div className="overflow-x-auto">
          {isNotFoundVisible ? (
            <div className="mt-3 relative border p-[10px] rounded-[10px] cursor-pointer transition-all border-[#343437] hover:bg-[#3d3d41]">
              <span className="flex items-center text-sm  gap-1 px-3 py-[6px] text-[12px] text-[#fff] bg-[rgba(255,49,49,0.88)] rounded-[32px]">
                <FontAwesomeIcon icon={faTimes} size="2x" />
                <span>{status}</span>
              </span>
            </div>
          ) : null}
          {isFoundVisible ? (
            <div className="mt-3 relative border p-[10px] rounded-[10px] cursor-pointer transition-all border-[#343437] hover:bg-[#3d3d41]">
              <span className="flex items-center text-sm  gap-1 px-3 py-[6px] text-[12px] text-[#fff] bg-[rgba(50,205,50,0.88)] rounded-[32px]">
                <FontAwesomeIcon icon={faCheckDouble} size="2x" />
                <span>Documento válido!</span>
              </span>
              <pre className="p-4">
                <table className="mt-3 text-[#fff]">
                  <tr>
                    <td>Data:</td>
                    <td>{Date}</td>
                  </tr>
                </table>
              </pre>
            </div>
          ) : null}
          


          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center w-full">
              <input
                type="file"
                className="text-sm text-stone-500
   file:mr-5 file:py-1 file:px-3 file:border-[1px]
   file:text-xs file:font-medium
   file:bg-stone-50 file:text-stone-700
   hover:file:cursor-pointer hover:file:bg-orange-50
   hover:file:text-orange-700
    mt-3 relative border flex items-center justify-between p-[10px] rounded-[10px] cursor-pointer transition-all
        border-[#343437] hover:bg-[#3d3d41]"
                onChange={(e) =>
                  e.target.files != null
                    ? setFile(e.target.files[0])
                    : setFile(null)
                }
              />
            </div>

 {isLoading && <p className="mt-2"></p>}
        { isLoading && <FontAwesomeIcon className="text-[grey]" icon={faSpinner} spin  size="2x" />}
        {isLoading && <div className="spinner"></div>}
            <button
              type="submit"
              className="mt-4  w-36 h-10 text-[14px] py-2 px-4 rounded-[8px] transition-colors bg-orange-500 text-white"
              disabled={!file}>
              Validar
            </button>
          </form>
        </div>
      </main>


 <main className="max-w-[920px]  my-6 mx-auto   flex flex-col gap-9 rounded-[10px]">
    <div className="grid lg:grid-cols-2 gap-4">
    <div className="bg-[#222124] p-5 border p-[10px] rounded-[10px]">
     <h1 className="text-[24px] text-[#ddd] font-medium">
           Consultas
          </h1>
          <h1 className="text-[24px] text-[#ddd]  text-[80px] mt-3 text-center bold">
          <strong> {requests}</strong>
      </h1>
     </div>
     <div className="hidden lg:block bg-[#222124] p-5 border p-[10px] rounded-[10px]">
          <h1 className="text-[24px] text-[#ddd] font-medium">
           Acesse pelo seu telemóvel
          </h1>
           <h1 className="text-[24px] text-center bold mt-3">
          <img src={QrImg} alt="MCX Express" className=" text-[#fff] bg-white mb-4 inline rounded-[10px]" width={124} />
          </h1>
       </div>
      </div>
      </main>


      <main className="max-w-[920px]  my-6 mx-auto p-5 bg-[#222124] flex flex-col gap-9 border rounded-[10px]">
        <div>
          <h1 className="text-[24px] text-[#ddd] font-medium">WebService</h1>
          <p className="text-[16px] text-[#ddd] font-normal mt-1 mb-5">
           Se pretende automatizar as suas tarefas faça o uso do seguinte serviço.
          </p>
          <p  className="text-[#ddd]">
            <FontAwesomeIcon icon={faExternalLink} />
            &nbsp;
            <a href={UPLOAD_ENDPOINT + "/swagger"} target="_blank">
              <b>{UPLOAD_ENDPOINT + "/swagger"}</b>
            </a>
          </p>
        </div>
      </main>
     </div>
  );
}


export default Home;