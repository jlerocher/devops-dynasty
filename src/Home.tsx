import ArticleCard from "./components/ArticleCard"
import Header from "./components/Header"

function Home() {
  return (
    <>
    <Header />
    <div className="grid grid-cols-1 md:grid md:grid-cols-3">

      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
    
    </>
  )
}

export default Home