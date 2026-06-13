import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faMicrophone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { useState, useRef } from 'react';

import styles from '../../styles/Conversation.module.css';

export default function InputBar() {
  const [inputMessage, setInputMessage] = useState('');
  const textareaRef = useRef(null);
  const [multiline, setMultiline] = useState(false);

  const handleChange = () => {
    const textarea = textareaRef.current;

    // Altura de uma linha
    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight, 10);

    setMultiline(textarea.scrollHeight > lineHeight * 1.5);
  };

  return (
    <div className={styles.inputBar}>
      <div className={styles.inputAttachContainer}>
        <button type="button" className={styles.inputButton}>
          <FontAwesomeIcon icon={faPaperclip} />
        </button>
        <textarea
          name="input"
          id="input-message"
          placeholder="Escreva uma mensagem"
          onChange={handleChange}
          className={multiline ?  styles.multiLine: styles.singleLine}
        ></textarea>
      </div>
      <div className={styles.buttonsContainer}>
        <button type="button" className={styles.inputButton}>
          <FontAwesomeIcon icon={faMicrophone} />
        </button>
        <button type="submit" className={styles.inputButton}>
          <FontAwesomeIcon icon={faPaperPlane} rotation={45} />
        </button>
      </div>
    </div>
  );
}
