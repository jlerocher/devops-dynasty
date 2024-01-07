import { Link } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import { useState } from "react"

export const SignIn = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailInfoContainerVisible, setEmailInfoContainerVisible] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const emailInfoContainer = (emailInfoContainerVisible: boolean) => {
    if (isValidEmail && emailInfoContainerVisible) {
      return <p className=" text-green-500 text-center font-bold">Email valide</p>
    } else if (!isValidEmail && emailInfoContainerVisible) {
      return <p className="text-red-500 text-center font-bold">Email invalide</p>
    }
  }

  return (
    <>
      <Header />
      
      <div className="border bg-white w-5/6 md:w-3/6 mx-auto p-3 mt-20 mb-20 space-y-5 rounded shadow-2xl">
      
        <h2 className="text-3xl font-bold text-center">Connexion</h2>
        <hr className="w-3/4 mx-auto py-1"/>
        
        <form action="#" method='get' className="flex flex-col ">
          <div className="flex flex-col  pb-12">
            <label htmlFor="email" className="text-xl w-3/4 mx-auto font-sans font-bold mb-2"> Identifiant</label>
            <input 
              type="email" 
              placeholder="Adresse Email" 
              className="border-none outline-none w-3/4 mx-auto pl-2 bg-slate-100 h-12 px-1 rounded font-mono text-xl" 
              onChange={
                (e) => {
                  if (e.target.value === '') {
                    setEmailInfoContainerVisible(false)
                  } else {
                    setEmailInfoContainerVisible(true)
                    setIsValidEmail(validateEmail(e.target.value))
                  }
                  }
              } 
              required
            />
            {emailInfoContainer(emailInfoContainerVisible)}
          </div>
          
          
          <div className="flex flex-col pb-6">
            <label htmlFor="password" className="text-xl w-3/4 mx-auto font-sans font-bold mb-2"> Mot de passe</label>
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
              <label htmlFor="remember">Se souvenir de moi</label>
            </span>
          </div>

          <span className="w-3/4 mx-auto mb-2">
            <Link to="signup" className="text-blue-500 font-bold">Pas encore de compte ?</Link>
          </span>
          
          <span className="w-3/4 mx-auto mb-2">
            <Link to="reset-password" className="text-blue-500 font-bold">Mot de passe oublié ?</Link>
          </span>

          <hr className="w-3/4 mx-auto py-1"/>

          <button type="submit" className="bg-blue-500 w-3/4 my-5 mx-auto p-2 font-bold rounded">Sign in</button>
        </form>
        
      </div>
    <Footer />
    </>
    
  )
}
