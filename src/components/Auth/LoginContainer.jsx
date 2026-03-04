import styles from './Auth.module.css';

export default function LoginContainer() {
  return (
    <>
      <h2>Bem Vindo de Volta!</h2>
      <form>
        <fieldset>
          <div className={styles.inputField}>
            <label htmlFor="email">Email de login:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" />
          </div>
        </fieldset>
        <div className={styles.forgotPassword}>
          <a href="#">Esqueci minha senha</a>
        </div>
        <div className={styles.buttonContainer}>
          <a href="/register">
            <button className={`${styles.button} ${styles.registerBtn}`}>Cadastre-se</button>
          </a>
          <button className={`${styles.button} ${styles.loginBtn}`}>Login</button>
        </div>
      </form>
    </>
  );
}
