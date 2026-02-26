import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

import styles from './Auth.module.css';

export default function AuthContainer({ isLogin }) {
  return (
    <div className={styles.authPage}>
      <h1 className={`color-gradient ${styles.pageTitle}`}>Code Pilot</h1>
      <menu className={styles.container}>
        {isLogin ? <LoginContainer /> : <RegisterContainer />}
      </menu>
    </div>
  );
}
