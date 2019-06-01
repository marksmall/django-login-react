import React from 'react';

import styles from './switch.module.css';

const Switch = ({ on, className = '', onClick, disabled = false }) => (
  <div>
    <input
      className={styles['toggle-input']}
      type="checkbox"
      checked={on}
      onChange={() => {
        // changing is handled by clicking the button
      }}
    />
    <button
      className={`${styles['toggle-btn']}
      ${on ? styles['toggle-btn-on'] : styles['toggle-btn-off']}`}
      disabled={disabled}
      aria-label="Toggle"
      onClick={onClick}
    />
  </div>
);

Switch.propTypes = {};

export default Switch;
