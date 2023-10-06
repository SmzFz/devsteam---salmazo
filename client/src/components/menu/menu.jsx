import styles from "./menu.module.css";
import logo from "../../assets/logo.png";
import iconCar from "../../assets/iconCar.svg";
import { useState } from "react";
import Modal from "../modal/modal";


const Menu = () => {
  const [isModal, setIsModal] = useState(false);
  

  const toggleModal = () => {
    setIsModal(!isModal);
    console.log(isModal);}
  return (
    <div className={styles.bar}>
      <div className={styles.logo}> <img src={logo} alt="" />
       </div>
      <div className={styles.devSteam}>
         DevSteam </div>
      <div className={styles.search}> <input type="text" placeholder="Buscar" /> </div>
      <div className={styles.iconCar}> <img src={iconCar} onClick={toggleModal} alt="" />  {isModal && <Modal click={toggleModal} />} </div>
    </div>
  );
};


export default Menu;