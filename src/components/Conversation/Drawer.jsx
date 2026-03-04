import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/Drawer.module.css';

export default function Drawer({ isOpen, onClose }) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.sidebarHeader}>
        <button className={styles.closeBtn} onClick={() => onClose()}>
          <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
        </button>
        <h2>Conversas</h2>
      </div>
    </aside>
  );
}
