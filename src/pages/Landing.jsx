import Navbar from "../components/Navber/Navbar"
import Hero from "../components/Herosection/Hero"
import Cards from "../components/Cards/Cards"
import About from "../components/About/About"
import Operaion from "../components/Operation/Operaion"
const landing = () => {
  return (
    <main>
     <Navbar/>
    <Hero/>
    <Cards/>
    <About/>
    <Operaion/>
    </main>
  )
}

export default landing