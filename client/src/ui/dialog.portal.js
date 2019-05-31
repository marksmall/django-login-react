import React from 'react';
import ReactDOM from 'react-dom';

import CloseButton from '../ui/close-button.component';

import styles from './dialog.module.css';

const Dialog = ({ isVisible, close, children }) =>
  isVisible
    ? ReactDOM.createPortal(
        <div className={styles['modal-overlay']}>
          <div className={styles.dialog} aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className={styles.header}>
              <CloseButton onClick={close} />
            </div>

            <div className={styles.body}>{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;

export default Dialog;
