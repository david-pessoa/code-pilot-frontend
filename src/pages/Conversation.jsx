import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Drawer from '../components/Drawer/Drawer';
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import styles from '../components/Header/Header.module.css';

export default function Conversation() {
  return (
    <>
      <header>
        <button className={styles.menuBtn}>
          <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
        </button>
        <h2>Code Pilot</h2>

        <div>
          <FontAwesomeIcon className={styles.userIcon} icon={faCircleUser} />
        </div>
      </header>
      <Drawer />
    </>
  );
}
