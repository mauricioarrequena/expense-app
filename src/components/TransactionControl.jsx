import styles from "../styles/TransactionControl.module.css";

export default function TransactionControl({
  className,
  onAddTransactionClick,
}) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.headerSection}>
        <div className={styles.headerControls}>
          <div className={styles.addControls}>
            <button className={styles.addButton} onClick={onAddTransactionClick} >
              <span className={`material-symbols-outlined ${styles.addIcon}`}>
                add
              </span>
              <span className={styles.addText}>New</span>
            </button>
          </div>
          <div className={styles.calendarControls}>
            <button className={styles.calendarButton}>
              <span
                className={`material-symbols-outlined ${styles.calendarIcon}`}
              >
                calendar_today
              </span>
              <span className={styles.calendarText}>25 April - 02 MAy</span>
            </button>
          </div>
          <div className={styles.filterControls}>
            <button className={styles.filterButton}>
              <span
                className={`material-symbols-outlined ${styles.filterIcon}`}
              >
                filter_alt
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.mainSection}>
        <span>No transactions found</span>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.transactionsListContainer}>
          <div className={styles.transactionItem}>item1</div>
          <div className={styles.transactionItem}>item1</div>
          <div className={styles.transactionItem}>item1</div>
        </div>
      </div>
    </div>
  );
}
