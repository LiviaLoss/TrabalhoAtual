import { logo } from "./styled"


function Header(){
    return(
        <header>
            <h1>Video</h1>
            <img src={logo.png} />
            <input type="text" placeholder="Busca" id="campoDeBusca"></input>
        </header>
    )
}

export default Header