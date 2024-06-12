import imgInicial from "../../assets/imgInicial.png"
import imgInicial2 from "../../assets/imgInicial2.png"
import Container from "../../components/Container/Container.tsx"
import { FaHeart } from "react-icons/fa"

const LandingPage = () => {

    return (
        <Container>
            <div>
                <img src={imgInicial} className=" w-72" alt="" />
                <img src={imgInicial2}  className="w-72" alt="" />
            </div>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, libero mollitia. Ad tempore quo, voluptates nostrum sint sapiente reiciendis voluptatem, a dolore accusamus amet optio eligendi voluptate sit odit ab.</p>
            </div>
            <footer className="flex justify-center items-center row-start-1 w-full pb-5 absolute bottom-0">
                <p>Made with <FaHeart className=" text-red-600 " /> by Jônatas</p>
            </footer>
        </Container>
    )
}

export default LandingPage