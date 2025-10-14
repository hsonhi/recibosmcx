    import { Outlet } from 'react-router-dom';
    import Navbar from './NavBar';

    function Layout() {
      return (
        <div>
          <Navbar />
          <div className="content">
            <Outlet /> {/* This is where the specific page content will render */}
             <div className="px-4">
            <main className="max-w-[920px] border my-6 mx-auto p-5 bg-[#222124] flex flex-col rounded-[10px] px-4">
               <div className="text-[#ddd]"><a href="./">Termos de uso e Políticas de Privacidade</a></div>
          </main>
          </div>
           </div>
        </div>
      );
    }

    export default Layout;