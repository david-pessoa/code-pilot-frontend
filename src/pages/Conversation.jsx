import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Drawer from '../components/Conversation/Drawer';
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import InputBar from '../components/Conversation/InputBar';
import Chat from '../components/Conversation/Chat';

import styles from '../styles/Conversation.module.css';

export default function Conversation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [messages, setMessages] = useState(null);

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
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <menu className={`${styles.chatMenu} ${isDrawerOpen ? styles.open : ''}`}>
        {!messages ? (
          <>
            <h1 className="color-gradient">Olá, Érica</h1>
            <br />
            <h1 className="color-gradient">Como posso ajudar?</h1>
          </>
        ) : (
          <br />
        )}
        <InputBar />
      </menu>
    </>
  );
}
