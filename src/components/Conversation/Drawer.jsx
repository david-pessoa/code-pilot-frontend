import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEllipsisVertical, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Drawer.module.css';
import { useState } from 'react';
import CustomModal from './CustomModal';

export default function Drawer({ isOpen, onClose, chatId }) {
  const [conversations, setConversations] = useState([
    { id: 1, name: 'Processo caça ilegal' },
    { id: 2, name: 'Processo caça ilegal' },
    { id: 3, name: 'Processo caça cool' },
    { id: 4, name: 'Processo caça ilegal' },
    { id: 5, name: 'Processo caça ilegal' },
    { id: 6, name: 'Processo caça ilegal' },
  ]);
  const [customModalOpen, setCustomModalopen] = useState(null);
  const [newConversationName, setNewConversationName] = useState('');
  const [renameInputOpen, setRenameInputOpen] = useState(null);

  const handleRenameConversation = conversationId => {

    // Realiza chamada de API no back-end
    setConversations(currentConversations => {
      const updatedConversations = currentConversations.map(chat =>
        chat.id === conversationId ? { ...chat, name: newConversationName } : chat
      );
      setNewConversationName('');
      setRenameInputOpen(null);
      //Faz chamada da API para atualizar no back-end

      return updatedConversations;
    });
  };

  const handleDeleteConversation = conversationId => {
    setConversations(currentConversations => {
      const updatedConversations = currentConversations.filter(chat => chat.id !== conversationId);
      setNewConversationName('');
      //Faz chamada da API pra atualizar no back-end
      return updatedConversations;
    });
  };

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
        {conversations.map(conv => (
          <li
            key={conv.id}
            className={`${styles.conversationListItem} ${
              chatId === conv.id ? styles.selected : ''
            }`}
          >
            {renameInputOpen !== conv.id ? (
              <>
                <a href={`/chat/${conv.id}`}>
                  <h4 className={styles.conversationTitle}>{conv.name}</h4>
                </a>

                <button
                  type="button"
                  className={styles.conversationListItemButton}
                  onClick={() =>
                    setCustomModalopen(currentId => (currentId === conv.id ? null : conv.id))
                  }
                >
                  <FontAwesomeIcon
                    className={styles.conversationListItemIcon}
                    icon={faEllipsisVertical}
                  />
                </button>
              </>
            ) : (
              <input
                type="text"
                className={styles.conversationListItemButton}
                onChange={e => setNewConversationName(e.target.value)}
                onBlur={() => {
                  handleRenameConversation(conv.id);
                }}
              />
            )}
            {console.log(conversations)}
            <CustomModal
              isOpen={conv.id === customModalOpen}
              onClose={() => setCustomModalopen(null)}
              onRename={setRenameInputOpen}
              onDelete={handleDeleteConversation}
              selectedChatId={customModalOpen}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}
