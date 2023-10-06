import styles from "../games/games.module.css";

const Games = ({ children, img, preco, desc }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />

      <div className={styles.escritorio}>
        <h3> Counter strike: Global offensive</h3>
        <h5> Ação, estratégia, multijogador.</h5>
        <div className={styles.desconto}>
          <div className={styles.diid}>
            <div className={styles.precos}>
              <h2>R$99,90</h2>
            </div>
            <div className={styles.info}>
              {" "}
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
