import Footer from "./components/Footer"
import Header from "./components/Header"
import { Link } from "react-router-dom"

export const  Register = () => {
  return (
    <>
      < Header />

      <div className="border bg-white w-5/6 md:w-3/6 mx-auto p-3 mt-20 mb-20 space-y-5 rounded shadow-2xl">
      
        <h2 className="text-3xl font-bold text-center">Inscription</h2>
        <hr className="w-3/4 mx-auto py-1"/>
        
        <form action="#" method='get' className="flex flex-col ">
          
          <div className="flex flex-col  pb-12">
              <label htmlFor="name" className="text-xl w-3/4 mx-auto font-sans font-bold mb-2">Votre Nom</label>
              <input 
                type="name" 
                placeholder="Nom de famille" 
                className="border-none outline-none w-3/4 mx-auto pl-2 bg-slate-100 h-12 px-1 rounded font-mono text-xl"
                required
              />
          </div>

          <div className="flex flex-col  pb-12">
            <label htmlFor="prenom" className="text-xl w-3/4 mx-auto font-sans font-bold mb-2">Votre prénom</label>
            <input 
              type="prenom" 
              placeholder="Votre prénom" 
              className="border-none outline-none w-3/4 mx-auto pl-2 bg-slate-100 h-12 px-1 rounded font-mono text-xl"
              required
            />
          </div>

          <div className="flex flex-col  pb-12">
            <label htmlFor="email" className="text-xl w-3/4 mx-auto font-sans font-bold mb-2">Votre identifiant</label>
            <input 
              type="email" 
              placeholder="Adresse Email" 
              className="border-none outline-none w-3/4 mx-auto pl-2 bg-slate-100 h-12 px-1 rounded font-mono text-xl"
              required
            />
          </div>
          
          
          <div className="flex flex-col pb-6">
            <label htmlFor="password" className="text-xl w-3/4 mx-auto font-sans font-bold mb-2">Votre mot de passe</label>
            <input 
              type="password" 
              placeholder="Mot de passe" 
              className="border-none outline-none w-3/4 mx-auto  pl-2 bg-slate-100 h-12 px-1 rounded font-mono text-xl" 
              required/>
          </div>

          <div className="flex flex-col pb-6">
            <label htmlFor="password" className="text-xl w-3/4 mx-auto font-sans font-bold mb-2">Confirmez votre mot de passe</label>
            <input 
              type="password" 
              placeholder="Mot de passe" 
              className="border-none outline-none w-3/4 mx-auto  pl-2 bg-slate-100 h-12 px-1 rounded font-mono text-xl" 
              required/>
          </div>

          <hr className="w-3/4 mx-auto py-1"/>

          <div className="w-3/4 mx-auto my-2">
            <input type="checkbox" id="remember" className="mr-2 h-4 w-4" />
            <span className="font-bold text-xl">
              <label htmlFor="remember">J'accepte les 
              <Link to='/terms-of-use'> conditions d'utilisation</Link> du site</label>
            </span>
          </div>

          <span className="w-3/4 mx-auto mb-2">
            <Link to="/login" className="text-blue-500 font-bold">Vous avez déjà un compte ?</Link>
          </span>

          <hr className="w-3/4 mx-auto py-1"/>

          <button type="submit" className="bg-blue-500 w-3/4 my-5 mx-auto p-2 font-bold rounded">S'inscrire'</button>
        </form>
        
      </div>

      <Footer />
    </>
    
  )
}
