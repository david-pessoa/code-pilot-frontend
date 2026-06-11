import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEllipsisVertical, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Drawer.module.css';
import { useEffect, useState } from 'react';

export default function Drawer({ isOpen, onClose, chatId }) {
  const [conversations, setConversations] = useState([
    { id: 1, name: 'Processo caça ilegal' },
    { id: 2, name: 'Processo caça ilegal' },
    { id: 3, name: 'Processo caça cool' },
    { id: 4, name: 'Processo caça ilegal' },
    { id: 5, name: 'Processo caça ilegal' },
    { id: 6, name: 'Processo caça ilegal' },
  ]);

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebarHeader}>
        <button className={styles.closeBtn} onClick={() => onClose()}>
          <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
        </button>
        <h2>Conversas</h2>
      </div>
      <ul className={styles.conversationList}>
        <li className={styles.conversationListItemNewChat}>
          <a href="/chat">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={styles.conversationListItemNewChatIcon}
            />

            <h4 className={styles.conversationTitle}>Nova conversa</h4>
          </a>
        </li>
        {console.log(chatId)}
        {conversations.map(conv => (
          <li
            key={conv.id}
            className={`${styles.conversationListItem} ${
              chatId === conv.id ? styles.selected : ''
            }`}
          >
            <a href={`chat/${conv.id}`}>
              <h4 className={styles.conversationTitle}>{conv.name}</h4>
            </a>

            <button type="button" className={styles.conversationListItemButton}>
              <FontAwesomeIcon
                className={styles.conversationListItemIcon}
                icon={faEllipsisVertical}
              />
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
