import Footer from "./components/Footer"
import Header from "./components/Header"
import { PiHandWavingFill } from "react-icons/pi";

export const About = () => {
  return (
    <>
      <Header />
        <h2 className="my-5 mx-auto text-center text-4xl font-bold">À Propos de DevOpsDynasty</h2>
        <hr className="my-5 mx-auto w-2/3"/>
        <p className="my-2 mx-5 text-center text-xl">
          <PiHandWavingFill className="inline mr-2 text-4xl text-blue-500"/>
          Bienvenue sur DevOpsDynasty, ton escale digitale dédiée à l'univers fascinant du DevOps, de la programmation
          et des technologies émergentes.

          <h3 className="my-4 font-bold">Qui suis-je?</h3>

          Salut, je suis Jean Le Rocher, le créateur de ce royaume numérique. Originaire de Brazzaville, au Congo, 
          je suis un développeur fullstack passionné, spécialisé dans le domaine du DevOps avec une orientation particulière vers le front-end.
          Maîtrisant des langages tels que JavaScript et Python, j'apprécie particulièrement le combo React + Tailwind + TypeScript pour 
          façonner des expériences web exceptionnelles.

          <h3 className="my-4 font-bold">Pourquoi DevOpsDynasty?</h3>

          DevOpsDynasty est bien plus qu'un blog technique. C'est un espace où la programmation devient une saga, où les concepts du DevOps prennent vie, et où la technologie s'entremêle avec la créativité. Je souhaite partager mon parcours d'apprentissage, mes découvertes, et offrir des ressources qui inspirent et éduquent ceux qui partagent ma passion pour le code.

          <h3 className="my-4 font-bold">Ce que tu trouveras ici:</h3>

          <ul className="my-2 space-y-3">
              <li>
                <strong>Articles Informatifs: </strong> 
                Des guides approfondis sur les principes du DevOps, des astuces de programmation, et des tutoriels pratiques pour élever tes compétences à un niveau supérieur.
              </li>
              <li>
                <strong>Exploration Technologique: </strong> 
                Découvre avec moi les dernières avancées en matière de JavaScript, Docker, Python, AWS, et bien d'autres technologies qui sculptent le paysage numérique.
              </li>
              <li>
                <strong>Une Communauté Engagée: </strong> 
                Rejoins la conversation, pose des questions, partage tes expériences, et connecte-toi avec d'autres passionnés du code dans la section commentaires.
              </li>
          </ul>

          <h3 className="my-4 font-bold">Reste Connecté</h3>

          Je suis ravi que tu aies atterri sur DevOpsDynasty. Reste à l'affût des nouvelles publications, des mises à jour techniques, et des discussions en cours. N'hésite pas à me contacter si tu as des questions, des suggestions, ou simplement pour discuter de notre amour commun pour le développement.
          Merci de faire partie de cette dynastie technologique!

        </p>
      <Footer />
      </>
  )
}
