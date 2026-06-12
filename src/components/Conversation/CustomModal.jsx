import styles from '../../styles/Drawer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useRef } from 'react';

export default function CustomModal({ isOpen, onClose, onRename, onDelete, selectedChatId }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={modalRef}
      className={`${styles.customModal} ${isOpen ? styles.isCustomModelOpen : ''}`}
    >
      <ul className={styles.modalList}>
        <li>
          <button type="button" onClick={() => onRename(selectedChatId)}>
            <FontAwesomeIcon icon={faPencil} />
            <h5>Renomear</h5>
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onDelete(selectedChatId)}>
            <FontAwesomeIcon icon={faTrash} />
            <h5>Excluir</h5>
          </button>
        </li>
      </ul>
    </div>
  );
}
