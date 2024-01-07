import Footer from "./components/Footer"
import Header from "./components/Header"
import robot from "./assets/robo_404.jpeg"

export const NotFound = () => {
  return (
    <>
      <Header />
      <div className="bg-white shadow-2xl rounded w-10/12 md:w-4/6 mx-auto text-center my-20">
      <img src={robot} alt="robot" className="mx-auto"/>
      <p className="text-3xl font-bold py-10 px-5">
        404 - La page que vous demandez n'existe pas
        <br />
        (ou pas encore)
      </p>
      </div>
      <Footer />
    </>
    
  )
}
