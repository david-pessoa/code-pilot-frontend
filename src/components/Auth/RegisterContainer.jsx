import styles from './Auth.module.css';

export default function RegisterContainer() {
  return (
    <>
      <h2 className={styles.registerTitle}>Cadastro</h2>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <div className={styles.inputField}>
            <label className={styles.label} htmlFor="email">
              Digite seu email:
            </label>
            <input className={styles.input} type="text" name="email" id="email" />
          </div>
          <div className={styles.inputField}>
            <label className={styles.label} htmlFor="name">
              Digite seu nome:
            </label>
            <input className={styles.input} type="text" name="password" id="password" />
          </div>
          <div className={styles.inputField}>
            <label className={styles.label} htmlFor="password">
              Crie uma senha:
            </label>
            <input className={styles.input} type="password" name="password" id="password" />
          </div>
          <div className={styles.inputField}>
            <label className={styles.label} htmlFor="password">
              Confirme a senha:
            </label>
            <input className={styles.input} type="password" name="password" id="password" />
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
