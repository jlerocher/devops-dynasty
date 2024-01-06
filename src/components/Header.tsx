import { useState } from "react";
import SearchBar from "./SearchBar"
import { TiThMenu } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


function Header() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    }

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
      };

  return (
    
    <header className="flex justify-between items-center p-4 bg-white shadow-xl">
        <h1 className="text-2xl font-bold font-serif">
            <Link to="/">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">DevOps</span>
                <span>Dynasty</span></Link>
        </h1>

        <span>
            <button className="text-3xl md:hidden mr-4 p-1 shadow-xl rounded-xl" onClick={toggleSearch} onFocus={() => setIsDropdownVisible(false)}><IoSearchSharp /></button>
            
            {
                isSearchVisible && (
                    <div className="absolute right-12 h-1/6 mt-8 w-3/4 bg-white rounded-md shadow-lg py-4 px-2 text-center font-bold text-xl">
                        <form action="#" method='get'>
                            <input type="text" placeholder="Cherchez un article" className="border-none outline-none w-full mb-4 bg-slate-100 h-12 px-1 rounded"/>
                            <button type="submit" className="bg-blue-500 p-2 font-bold rounded">Rechercher</button>
                        </form>
                    </div>
                    )}
            
            <button className="text-3xl md:hidden p-1 shadow-xl rounded-xl" onClick={toggleDropdown} onFocus={() => setIsSearchVisible(false)}><TiThMenu /></button>
            {isDropdownVisible && (
                <div className="absolute right-2 mt-8 w-40 m bg-white rounded-md shadow-lg py-1 text-center font-bold text-xl">
                    <Link to="/login" className="block px-4 py-2">Connexion</Link>
                    <hr className="w-2/3 mx-auto"/>
                    <Link to="/profile" className="block px-4 py-2">Mon compte</Link>
                    <hr className="w-2/3 mx-auto"/>
                    <Link to="/about" className="block px-4 py-2">À propos</Link>
                    
                    
                </div>
                )}
            
            
        </span>
        

        <SearchBar className="hidden md:block mx-auto"/>
        
        <span className="hidden md:block ">
            <ul className="flex space-x-4 text-lg ">
                <li className="hover:font-bold hover:text-blue-500"><Link to="/login">Connexion</Link></li>
                <li className="hover:font-bold hover:text-blue-500"><Link to="/profile">Mon compte</Link></li>
                <li className="hover:font-bold hover:text-blue-500"><Link to="/about">À propos</Link></li>
                
            </ul>
        </span>
        
    </header>
  )
}

export default Header