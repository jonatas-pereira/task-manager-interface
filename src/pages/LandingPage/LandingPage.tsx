import imgInicial from "../../assets/imgInicial.png"
import imgInicial2 from "../../assets/imgInicial2.png"
import Container from "../../components/Container/Container.tsx"
import { FaHeart } from "react-icons/fa"

const LandingPage = () => {
  return (
    <>
      <Container>
        <div>
          <img src={imgInicial} className=" w-72" alt="" />
          <img src={imgInicial2}  className="w-72" alt="" />
        </div>
      </Container>
      <footer className="flex justify-center items-center">
        <div className="flex justify-end items-center w-full max-w-7xl pb-5 mr-10 absolute bottom-0">
          <p>Feito com</p>
          <FaHeart className=" text-red-600 mx-2" />
          <p>por Jônatas.</p>
        </div>
      </footer>
    </>
  )
}

export default LandingPage
