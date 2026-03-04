import styles from './Auth.module.css';
import { Link } from 'react-router-dom';

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
          <Link to="/register" className={`${styles.button} ${styles.registerBtn}`}>
            Cadastre-se
          </Link>
          <button type="submit" className={`${styles.button} ${styles.loginBtn}`}>
            Login
          </button>
        </div>
      </form>
    </>
  );
}
