import axios from "axios";
import React, { useState, useEffect } from "react";
import webserviceImg from "./assets/images/mxexpress.png";
import pdfImg from "./assets/images/pdf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink,
  faCheckDouble,
  faTimes,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

const UPLOAD_ENDPOINT = "https://localhost:7094/decrypto/upload";

function FileUploader() {
  const [file, setFile] = useState<any>(null);
  const [status, setStatus] = useState("Nao foram encontradas assinaturas");
  const [data, setPosts] = useState([]);
  const [Date, setDate] = useState("");
  const [Signer, setSigner] = useState("");
  const [Algorithm, setAlgorithm] = useState("");
  const [isNotFoundVisible, setisNotFoundVisible] = useState(false);
  const [isFoundVisible, setisFoundVisible] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    setStatus(""); // Reset status
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const resp = await axios
      .post(UPLOAD_ENDPOINT, formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: null,
        },
      })
      .then((response) => {
        setPosts(response.data.pdfSignatureInfo);
        setSigner(
          response.data.pdfSignatureInfo.signer
            ? response.data.pdfSignatureInfo.signer
            : null
        );
        setDate(response.data.pdfSignatureInfo.date);
        setAlgorithm(response.data.pdfSignatureInfo.encryptionAlgorithm);
        setisFoundVisible(response.data.pdfSignatureInfo.signer ? true : false);
        setisNotFoundVisible(
          response.data.pdfSignatureInfo.signer ? false : true
        );
        setStatus("Não foram encontradas assinaturas");
      })
      .catch((error) => {
        setPosts(error.response.data);
        setisFoundVisible(false);
        setisNotFoundVisible(true);
        setStatus(error.response.data);
      });
  };

  return (
    <div className="py-24 px-4">
      <h1 className="text-3xl font-bold text-center">
        <FontAwesomeIcon icon={faKey} /> DeCrypto
      </h1>
      <h1 className="text-center mt-1">
        Valide assinaturas criptográficas em documentos digitais e recibos de
        pagamentos
      </h1>

      <main className="text-center max-w-[1280px] my-14 mx-auto p-5 bg-[#222124] flex flex-col gap-5 rounded-[10px]">
        <div>
          <h1 className="text-[24px] text-[#FBF8FB] font-medium">
            Adicionar arquivo
          </h1>
          <p className="text-[16px] text-[#999999] font-normal mt-1">
            Adicione um documento para verificar a sua assinatura.
          </p>
        </div>

        <table className="content-center border-1 border-solid w-[95%]">
          <tr>
            <td className="text-right float-right">
              <img src={pdfImg} width={64} />
            </td>
            <td>
              <img src={webserviceImg} width={58} />
            </td>
          </tr>
        </table>

        <div className="overflow-x-auto">
          {isNotFoundVisible ? (
            <div className="mt-3 relative border p-[10px] rounded-[10px] cursor-pointer transition-all border-[#343437] hover:bg-[#3d3d41]">
              <span className="flex items-center text-sm  gap-1 px-3 py-[6px] text-[12px] text-[#fff] bg-[rgba(255,49,49,0.38)] rounded-[32px]">
                <FontAwesomeIcon icon={faTimes} size="2x" />
                <span>{status}</span>
              </span>
            </div>
          ) : null}

          {isFoundVisible ? (
            <div className="mt-3 relative border p-[10px] rounded-[10px] cursor-pointer transition-all border-[#343437] hover:bg-[#3d3d41]">
              <span className="flex items-center text-sm  gap-1 px-3 py-[6px] text-[12px] text-[#fff] bg-[rgba(50,205,50,0.28)] rounded-[32px]">
                <FontAwesomeIcon icon={faCheckDouble} size="2x" />
                <span>Assinatura(s) válida</span>
              </span>
              <pre className="p-4">
                <table className="mt-3 ">
                  <tr>
                    <td>Data:</td>
                    <td>{Date}</td>
                  </tr>
                  <tr>
                    <td>Assinante:</td>
                    <td>{Signer}</td>
                  </tr>
                  <tr>
                    <td>Algoritmo:</td>
                    <td>{Algorithm}</td>
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
            <button
              type="submit"
              className="mt-4  w-36 h-10 text-[14px] py-2 px-4 rounded-[8px] transition-colors bg-orange-500 text-white"
              disabled={!file}
            >
              Carregar
            </button>
          </form>
        </div>
      </main>

      <main className="max-w-[1280px]  my-14 mx-auto p-5 bg-[#222124] flex flex-col gap-9 rounded-[10px]">
        <div>
          <h1 className="text-[24px] text-[#FBF8FB] font-medium">WebService</h1>
          <p className="text-[16px] text-[#999999] font-normal mt-1 mb-5">
            Faça o uso do seguinte serviço para automatizar tarefas.
          </p>
          <p>
            <FontAwesomeIcon icon={faExternalLink} />
            &nbsp;
            <a href="http://localhost:5174/" target="_blank">
              <b>http://localhost:5174/</b>
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default FileUploader;
