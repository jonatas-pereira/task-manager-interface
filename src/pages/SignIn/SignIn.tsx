import { IoCloseSharp } from "react-icons/io5"
import PictureLogin from "../../assets/signInPicture.png"
import Vetor from "../../assets/VectorSignIn.svg"
import Container from "../../components/Container/Container.tsx"
import { Link } from "react-router-dom"

const SignIn = () => {

   return ( 
      <Container>
         <div className="basis-1/2 hidden justify-center items-center h-full rounded-l-xl bg-gradient-to-r from-blueI to-blueF sm:flex">
            <img src={PictureLogin} className="w-72" alt="" />
         </div>
         <div className=" relative flex flex-col justify-center items-center h-full w-full m-10 rounded-xl bg-secondS sm:basis-1/2 sm:rounded-l-none sm:rounded-r-lg sm:m-0">
            <img className=" h-full w-auto absolute right-full hidden sm:block" src={Vetor} alt="" />
            <div className="flex flex-col justify-center items-center w-full">
               <h1 className="text-5xl mb-12 text-titleC">Entrar</h1>
               <div className="w-full p-4 sm:w-3/5 sm:p-0">
                  <form className="w-full text-2xl ">
                     <p className="text-dark">Email</p>
                     <div className="mb-7">
                        <input className="w-full text-xl pt-2 bg-transparent text-gray-500 focus:outline-none" type="text" placeholder='Digite seu email'/>
                        <div className="w-full h-1 bg-gradient-to-r from-btnF to-btnI"></div>
                     </div>
                     <p className="text-dark">Senha</p>
                     <div className=" mb-2 ">
                        <input className="w-full text-xl pt-2 bg-transparent text-gray-500 focus:outline-none" type="text" placeholder='Digite sua senha'/>
                        <div className="w-full h-1 bg-gradient-to-r from-btnF to-btnI"></div>
                     </div>
                     <div className='flex justify-between'>
                        <div className="flex items-center">
                           <input type="checkbox" id='' />
                           <label className="text-base text-dark underline decoration-1">Lembrar senha</label>
                        </div>
                        <a href="" className="text-base text-dark">Esqueceu a senha?</a>
                     </div>
                  </form>
                  <div className='w-full flex justify-around mt-10'>
                     <button className="w-5/12 h-10 rounded-lg border-none text-2xl bg-gradient-to-r from-btnI to-btnF text-zinc-50">Entrar</button>
                     <Link  className="flex justify-center items-center w-5/12 h-10 rounded-lg border-solid border-2 text-2xl text-btnColor border-btnColor" to="/signup">
                        <button>Cadastrar</button>
                     </Link> 
                  </div>
               </div>
            </div>
            <Link to="/">
               <IoCloseSharp className="absolute right-6 top-6 text-light size-8 "/>
            </Link>
         </div>
      </Container>
   )
}

export default SignIn