import styles from './Auth.module.css';

export default function RegisterContainer() {
  return (
    <>
      <h2 className={styles.registerTitle}>Cadastro</h2>
      <form>
        <fieldset>
          <div className={styles.inputField}>
            <label htmlFor="email">Digite seu email:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="name">Digite seu nome:</label>
            <input type="text" name="password" id="password" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="password">Crie uma senha:</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="password">Confirme a senha:</label>
            <input type="password" name="password" id="password" />
          </div>
        </fieldset>
        <div className={styles.buttonContainer}>
          <button type="submit" className={`${styles.button} ${styles.submitRegisterBtn}`}>
            Concluir Cadastro
          </button>
        </div>
      </form>
    </>
  );
}
