import styles from "./car.module.css";


const CarModal = ({imgModal, nome}) => {
  return (
    <div className={styles.card}>
        <img src={imgModal} alt="" />
        <div className={styles.box}>
            <h3>{nome}</h3>
            <h4>R$99,90</h4>
            <p>Remover</p>
        </div>
    </div>
  )
}


export default CarModal