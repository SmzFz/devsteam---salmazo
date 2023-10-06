import "./App.css";

// Importa os componentes necessários do diretório '../components'

import Menu from "../components/menu/menu"; // Importa o componente do menu
import Promo from "../components/promo/promo"; // Importa o componente de promoção
import Game from "../components/games/games"; // Importa o componente de jogo

// Importa as imagens dos jogos a partir do diretório '../assets'

import jogo1 from "../assets/dotinha.jpg"; // Importa uma imagem do jogo 1
import jogo2 from "../assets/lol.png"; // Importa uma imagem do jogo 2
import jogo3 from "../assets/valorant.jpg"; // Importa uma imagem do jogo 3
import jogo4 from "../assets/counter-strike.png"; // Importa uma imagem do jogo 4
import Modal from "../components/modal/modal";

// Declara o componente funcional 'App'
const App = () => {

  // Retorna a estrutura do componente 'App'
  return (
    <div className="App">
      {/* Renderiza o componente do menu */}
      <div className="menu">
        <Menu ></Menu>
      </div>
      {/* Renderiza um título */}
      <div className="escrito">
        <p>PROMOÇÕES</p>
      </div>
      {/* Renderiza um container para promoções de jogos */}
      <div className="container">
        {/* Renderiza o componente de promoção com dados específicos */}
        <Promo img={jogo1} preco={"199.90"} desc="0.5">
          {" "}
        </Promo>

        {/* Renderiza o componente de promoção com dados específicos */}
        <Promo img={jogo2} preco={"199.90"} desc="0.5">
          {" "}
        </Promo>

        {/* Renderiza o componente de promoção com dados específicos */}
        <Promo img={jogo3} preco={"199.90"} desc="0.5">
          {" "}
        </Promo>
      </div>
      {/* Renderiza um título */}
      <div className="escrito2">
        <p>OUTROS JOGOS</p>
      </div>
      {/* Renderiza vários componentes de jogo com dados específicos */}
      <Game img={jogo4} preco={"199.90"} desc="0.5">
        {" "}
      </Game>
      <Game img={jogo4} preco={"199.90"} desc="0.5">
        {" "}
      </Game>
      <Game img={jogo4} preco={"199.90"} desc="0.5">
        {" "}
      </Game>
      <Game img={jogo4} preco={"199.90"} desc="0.5">
        {" "}
      </Game>
      <Game img={jogo4} preco={"199.90"} desc="0.5">
        {" "}
      </Game>
      <div className="modal">
        {/*<modal> </modal>*/}
      </div>
      
    </div>
  
  );
};

// Exporta o componente 'App' para ser usado em outros lugares do aplicativo
export default App;