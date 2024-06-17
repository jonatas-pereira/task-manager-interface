import Container from "../../components/Container/Container.tsx"
import ImgLP from "../../assets/landinpImg.png"
import Vetor from "../../assets/VectorSignIn.svg"

const LandingPage = () => {
  return (
    <div>
      <Container>
        <div className="basis-1/2 hidden justify-center items-center h-full rounded-l-xl bg-gradient-to-r from-blueI to-blueF sm:flex">
          <img src={ImgLP} className=" w-52 lg:w-80" alt="" />
        </div>
        <div className="relative w-full h-full basis-1/2 ">
          <img className=" h-full w-auto absolute right-full hidden sm:block" src={Vetor} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default LandingPage
