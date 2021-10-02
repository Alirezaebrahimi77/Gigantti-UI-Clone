import React,{useState, useEffect, useRef} from "react";
import "../styles/global.css";
import logo from "../images/gigLogo.png";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
function Header() {

    const node = useRef(false);

    useEffect(()=>{
        document.addEventListener("mousedown", (e) => {
            if (node.current && node.current.contains(e.target)) {
                return;
              }
              setWideSearch(false)
        })
    },[node])

    const [wideSearch, setWideSearch] = useState(false);

    const makeWide = () =>{
        setWideSearch(!wideSearch);
    }
  return (
    <header className="border-b-2">
      <div className="flex justify-center bg-gigPink py-4 md:py-1 cursor-pointer">
        <h3 className="uppercase font-semibold text-white text-sm md:text-md">
          Giganttiset synttärit - katso tarjoukset
        </h3>
      </div>
      <div className="bg-white">
        <div className="flex justify-between items-center">
          <div>
            <span className="headerLink md:hidden">Kirjaudu</span>
          </div>
          <div className="relative w-40 md:hidden cursor-pointer">
            <img src={logo} alt="" className="object-cover" />
          </div>

          <div className="py-2">
            <span className="headerLink hidden md:inline hover:bg-gigGreen p-1">Kirjaudu</span>
            <span className="headerLink hover:bg-gigGreen p-1">Myymälät</span>
            <span className="headerLink hidden md:inline hover:bg-gigGreen p-1">Gigantti-klubi</span>
            <span className="headerLink hidden md:inline hover:bg-gigGreen p-1">Asiakaspalvelu</span>
            <span className="headerLink hidden md:inline hover:bg-gigGreen p-1">Työpaikat</span>
            <span className="headerLink hidden md:inline hover:bg-gigGreen p-1">Yritysmyynti</span>
          </div>
        </div>
        <div className="flex items-center justify-left md:justify-between px-2 md:px-3 md:py-2">
          <div className={`relative cursor-pointer md:block md:w-40 ${wideSearch ? 'hidden': 'block'}`}>
            <img src={logo} alt="" className="hidden md:block" />

            <MenuIcon className="h-8 object-cover md:hidden" />
          </div>
          <div className={`flex flex-grow items-center border-2 shadow-sm md:max-w-lg ${wideSearch ? 'mx-0': 'mx-5'}`}>
                  <input type="text" placeholder="Hae" className="flex-grow outline-none px-2" onClick={makeWide} ref={node}/>
                  <SearchIcon className="md:inline-flex h-8 bg-gigGreen text-white p-2 cursor-pointer"/>
          </div>
          <div className={`${wideSearch ? 'hidden': 'block'} md:block cursor-pointer`}>
                <ShoppingCartIcon className="h-6"/>
          </div>
         
        </div>
      </div>
      
    </header>
  );
}

export default Header;
