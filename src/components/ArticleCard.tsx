import { Link } from "react-router-dom";
import numpy from "../assets/numpy_1200x720.png"
import { IoIosPlayCircle } from "react-icons/io";

interface ArticleCardProps {
  articleTitle: string,
  articleSummary: string,
  articleCategories: string[],
  articleImage: string,
  articlePublishedDate: string,
  authorName?: string,
  articleLink: string
}
function ArticleCard( {articleTitle = "Titre descriptif et un peu putaclic de l'article", 
                      articleSummary = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa aut commodi id! Consequuntur, dolorum repellat! 
                      Eaque, laudantium blanditiis omnis numquam velit iste voluptate illum qui provident voluptatibus, ullam debitis!`, 
                      articleCategories = ["Catégorie 1", "Catégorie 2", "Catégorie 3"],
                      articleImage = numpy,
                      articlePublishedDate = new Date().toString().slice(0, 15),
                      authorName = "jlerocher",
                      articleLink = "#"}: ArticleCardProps): JSX.Element {
  return (
    <div className="m-4 bg-white rounded-md shadow-2xl text-center overflow-hidden">
      <div>
        <img src={articleImage} alt="numpy image" />
        <h2 className="font-bold text-xl mt-2 first-letter:italic first-letter:text-4xl first-letter:capitalize px-2 hover:text-blue-500">
          <Link to={articleLink}>{articleTitle}</Link>
        </h2>
      </div>
        <p className="flex justify-between px-3 py-2">
           <span className="font-bold">{articlePublishedDate}</span>
           <span className="font-bold first-letter:capitalize font-mono text-blue-500">by @{authorName}</span></p>
        
        <span>
          <ul className="list-none grid grid-cols-3 space-x-1 justify-center italic font-bold text-lg mx-2">
          
            {articleCategories.map((category) => (
              <li className="bg-gray-100 p-1 rounded-md m-1">{category}</li>
            ))}
          </ul>
        </span>
      
      <p className="p-2 font-mono">
        {articleSummary}
      </p>

      <button className="text-xl flex justify-evenly mx-auto space-x-2 border border-blue-500 bg-blue-500 m-5 p-5 rounded">
        <a href="{articleLink}" className="text-2xl font-bold">Lire l'article</a>
        <IoIosPlayCircle className="text-3xl"/>
      </button>
    </div>
  )
}

export default ArticleCard