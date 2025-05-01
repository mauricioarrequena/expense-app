import styles from "../styles/AccountsList.module.css";

export default function AccountsList({
  className = "",
  onAddButtonClick,
  accounts,
  onEditButtonClick,
}) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.topSection}>
        <button className={styles.addButton} onClick={onAddButtonClick}>
          <span className={`material-symbols-outlined ${styles.addIcon}`}>
            add
          </span>
          <span className={styles.addText}>New</span>
        </button>
      </div>
      <div className={styles.middleSection}>
        <span>Bank Account</span>
      </div>
      <div className={styles.bottomSection}>
        {accounts.map((account) => {
          return (
            <div key={account.id} className={styles.accountItem}>
              <div className={styles.accountName}>
                <span>{account.name}</span>
              </div>
              <div className={styles.accountAmount}>
                <span>{account.balance}</span>
              </div>
              <div className={styles.accountButtons}>
                <span
                  className={`material-symbols-outlined ${styles.editIcon}`}
                  onClick={() => onEditButtonClick(account)}
                >
                  edit
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
