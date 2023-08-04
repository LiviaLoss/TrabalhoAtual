import logo from "../assets/logo.png"
import { Cabecalho } from "./styled.jsx"

function Header(){
    return(
        <Cabecalho>
            <img src={logo} />
            <input type="text" placeholder="Busca" id="campoDeBusca"></input>
        </Cabecalho>
    )
}

export default Header