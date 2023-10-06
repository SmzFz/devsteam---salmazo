import CarModal from "../car/car";
import style from "./modal.module.css";


import img1 from "../../assets/dotinha.jpg";
import img2 from "../../assets/lol.png";
import img3 from "../../assets/counter-strike.png";


const Modal = ({ enable, out }) => {
  return (
    <>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <div className={style.jogos}>
          <CarModal imgModal={img1} nome={"League os Legends"}></CarModal>
          <CarModal imgModal={img2} nome={"Dota 2"}></CarModal>
          <CarModal imgModal={img3} nome={"Valorant"}></CarModal>
        </div>
        <div className={style.total}>
          <div className={style.text}>
            <h2>Total</h2>
            <h4>R$299,70</h4>
          </div>
          <button>Adicione ao carrinho</button>
        </div>
      </div>
    </>
  );
};


export default Modal;