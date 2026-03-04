import styles from './Auth.module.css';
import { Link } from 'react-router-dom';

export default function LoginContainer() {
  return (
    <>
      <h2 className={styles.loginTitle}>Bem Vindo de Volta!</h2>
      <form>
        <fieldset className={styles.fieldset}>
          <div className={styles.inputField}>
            <label htmlFor="email" className={styles.label}>
              Email de login:
            </label>
            <input className={styles.input} type="text" name="email" id="email" />
          </div>
          <div className={styles.inputField}>
            <label className={styles.label} htmlFor="password">
              Senha:
            </label>
            <input className={styles.input} type="password" name="password" id="password" />
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
