import "./style.css"
import Nav from "../src/Nav/Nav"
import Footer from "./Components/Footer/Footer"
import Header from "../src/Header/Header"
import Home from "../src/Pages/home"

function App() {

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (

    <body>
      <div class="tela-inteira">
        <Header /> /*Meu header está aqui*/

        <main>
          <Nav/>

          <Home reproduz={reproduzVideo} />
           {/* para facilitar pode trocar para qualquer nome, trocamos o reporduzVideo para reproduz para FACILITAR */}

          

        </main>

      </div>

    </body>
  );
}

export default App;
