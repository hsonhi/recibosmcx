import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import webserviceImg from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

const itemArray = [
  { title: 'Início', url: './' },
  { title: 'Sobre Nós', url: '/about' },
  { title: 'Contactos', url: '/contact' },
];

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

    return (
     <div>
      <div className="flex flex-row justify-between px-12 py-3 items-center  text-center  max-w-[920px]  my-6 mx-auto p-5  rounded-[10px]">
        <div className="text-primary flex items-center flex-col font-extrabold">
         <a href='./'><img src={webserviceImg} alt="MCX Express" className="" width={247} /></a>
        </div>
        <ul className="hidden mt-8 sm:flex flex-row justify-between items-center gap-6 font-semibold text-sm">
          {itemArray.map((x, index) => {
            return (
              <li key={index} className="hover:text-primary duration-200">
                 {/*No page reloads  <Link to={x.url}>{x.title}</Link> */}
                
                 {/*Page reloads*/}
                  <a href={x.url} className="">
                  {x.title}
                </a> 
              </li>
            );
          })}
        </ul>
        {
          <button onClick={handleClick} className="sm:hidden mt-7">
            {isOpen ? (
               <FontAwesomeIcon icon={faTimes} size="2x" />
            ) : (
               <FontAwesomeIcon icon={faBars} size="2x" />
            )}
          </button>
        }
      </div>
      <div>
        {
          <ul
            className={`flex sm:hidden flex-col  items-center gap-4 font-semibold text-sm duration-700 overflow-hidden transition-all ${
              isOpen ? 'h-56' : 'h-0'
            } `}
          >
            {itemArray.map((x, index) => {
              return (
                <li key={index} className="hover:text-primary duration-200">
                   {/*No page reloads  <Link to={x.url}>{x.title}</Link> */}
                
                 {/*Page reloads*/}
                  <a href={x.url} className="">
                  {x.title}
                </a> 
                </li>
              );
            })}
          </ul>
        }
      </div>
</div>
    );
};

export default NavBar;