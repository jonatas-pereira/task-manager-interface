import { IoCloseSharp } from "react-icons/io5"
import Vetor from "../../assets/VectorSignUp.svg"
import VectorSignUp from "../../assets/signUpPicture.png"
import Container from "../../components/Container/Container"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <Container>
      <div className="relative flex flex-col justify-center items-center h-full w-full rounded-2xl m-10 bg-secondS sm:basis-1/2 sm:rounded-l-2xl sm:rounded-r-none sm:m-0">
        <h1 className="text-5xl mb-12 text-titleC"> Cadastre-se </h1>
        <div className="w-full p-4 sm:w-3/5 sm:p-0">
          <form className="w-full text-2xl ">
            <p className="text-dark"> Email </p>
            <div className="mb-7">
              <input className="w-full text-xl pt-2 bg-transparent text-gray-500 focus:outline-none" type="text" placeholder='Digite seu email'/>
              <div className="w-full h-1 bg-gradient-to-r from-btnF to-btnI"> </div>
            </div>
            <p className="text-dark"> Senha </p>
            <div className="mb-7">
              <input className="w-full text-xl pt-2 bg-transparent text-gray-500 focus:outline-none" type="text" placeholder='Digite sua senha'/>
              <div className="w-full h-1 bg-gradient-to-r from-btnF to-btnI"> </div>
            </div>
            <p className="text-dark"> Confirme a senha </p>
            <div className="mb-7">
              <input className="w-full text-xl pt-2 bg-transparent text-gray-500 focus:outline-none" type="text" placeholder='Digite sua senha novamente'/>
              <div className="w-full h-1 bg-gradient-to-r from-btnF to-btnI"> </div>
            </div>
          </form>
            <div className='w-full flex justify-around mt-10'>
              <Link to="/signin" className="flex justify-center items-center w-5/12 h-10 rounded-lg border-none text-2xl bg-gradient-to-r from-btnI to-btnF text-zinc-50">
                <button> Entrar </button>
              </Link>
              <button className="w-5/12 h-10 rounded-lg border-solid border-2 text-2xl text-btnColor border-btnColor"> Cadastrar </button>
            </div>
        </div>
        <Link to="/">
          <IoCloseSharp className="absolute right-6 top-6 sm:hidden size-8 " />
        </Link>
      </div>
      <div className="relative basis-1/2 hidden justify-center items-center h-full rounded-2xl bg-gradient-to-r from-blueI to-blueF sm:flex sm:rounded-l-none">
        <img src={VectorSignUp} className="w-72" />
        <Link to="/">
          <IoCloseSharp className="absolute right-6 top-6 hidden sm:block sm:text-zinc-50 size-8 " />
        </Link>
        <img src={Vetor} className="absolute h-full w-auto left-0 hidden sm:block" />
      </div>
    </Container>
  )
}

export default SignUp
