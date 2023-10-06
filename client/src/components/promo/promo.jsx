import styles from "./promo.module.css";


const Promo = ({children, img, preco, desc}) => {
  return (
    <div className={styles.card}>
        <img src={img} alt="" />
      <div className={styles.info}>
        <h3> Oferta exclusiva </h3>
        <div className={styles.desconto}>
          <h1>-50%</h1>
          <div className={styles.precos}>
            <p>{children}</p>
            <h2>{preco}</h2>
            <h2>{(preco = preco * desc)}</h2>
          </div>
        </div>
        <button>Adicionar ao carrinho</button>
      </div>
    </div>
    

    
    
  );
};


export default Promo;

