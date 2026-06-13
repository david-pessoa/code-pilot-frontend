import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Drawer from '../components/Conversation/Drawer';
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import InputBar from '../components/Conversation/InputBar';
import Chat from '../components/Conversation/Chat';

import styles from '../styles/Conversation.module.css';
import { useAuth } from '../context/AuthContext';

export default function Conversation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const { user } = useAuth();
  const { conversationId } = useParams();

  useEffect(() => {
    // Chama função load messages para obter conversas do back-end
  }, [messages]);

  return (
    <>
      <header className={`${styles.header} ${isDrawerOpen ? styles.open : ''}`}>
        <div className={styles.menuBox}>
          <button
            className={`${styles.menuBtn} ${isDrawerOpen ? styles.open : ''}`}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
          </button>
          <h2>Code Pilot</h2>
        </div>
        <button className={styles.userIconBtn}>
          <FontAwesomeIcon className={styles.userIcon} icon={faCircleUser} />
        </button>
      </header>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        chatId={Number(conversationId)}
      />
      <main className={`${styles.chatMenu} ${isDrawerOpen ? styles.open : ''}`}>
        {!conversationId ? (
          <h1 className="color-gradient">
            Olá, {user?.name ?? ''}
            <br />
            Como posso ajudar?
          </h1>
        ) : (
          messages
        )}
        <InputBar />
      </main>
    </>
  );
}
