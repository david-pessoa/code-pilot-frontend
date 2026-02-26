import styles from './Auth.module.css';

export default function LoginContainer() {
  return (
    <>
      <h2>Bem Vindo de Volta!</h2>
      <form>
        <label for="email">Email de login:</label>
        <input type="text" name="email" id="email" />
        <label for="password">Senha:</label>
        <input type="password" name="password" id="password" />
        <a href="#">Esqueci minha senha</a>
        <a href="/register">
          <button className={`${styles.button} ${styles.registerBtn}`}>Cadastre-se</button>
        </a>
        <button className={`${styles.button} ${styles.loginBtn}`}>Login</button>
      </form>
    </>
  );
}
