import { Link } from "react-router-dom";
import { FaFacebook, FaXTwitter,  } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white shadow-2xl mt-5 bottom-0 md:bottom-0 md:relative w-screen">
      <div className="flex justify-between p-4">
        <h2 className="text-4xl font-bold font-serif">
            <Link to="/">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">DevOps</span>
                <span>Dynasty</span>
            </Link>
        </h2>

        <span className="mt-3">
            <ul className="text-xl md:text-3xl md:mr-10 flex space-x-5 ">
                <li className="hover:font-bold hover:text-blue-500">
                  <button>
                    <Link to="#">
                      <FaFacebook />
                    </Link>
                  </button>
                </li>
                <li className="hover:font-bold hover:text-blue-500">
                  <button>
                    <Link to="#">
                      <FaXTwitter />
                    </Link>
                  </button>
                </li>
                <li className="hover:font-bold hover:text-blue-500">
                  <button>
                    <Link to="#">
                      <FaYoutube />
                    </Link>
                  </button>
                  
                </li>
            </ul>
        </span>

        <span className="hidden md:block ">
            <ul className=" text-lg ">
                <li className="hover:font-bold hover:text-blue-500"><Link to="/profile">Mon compte</Link> </li>
                <li className="hover:font-bold hover:text-blue-500"><Link to="/about">À propos</Link></li>
                <li className="hover:font-bold hover:text-blue-500"><Link to="/login">Connexion</Link></li>
            </ul>
        </span>
      </div>
      
      <p className="text-center py-4">© 2024 Jean Le Rocher. Tous droits réservés.</p>
    </footer>
  )
}

export default Footer