import { useEffect, useState } from "react";
import styles from "../styles/TransactionControl.module.css";
import { getTransactions } from "../services/transactionService";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
}

export default function TransactionControl({
  className,
  onAddTransactionClick,
  onEditButtonClick,
}) {
  const [transactions, setTransactions] = useState([]);

  async function fetchTransactions() {
    const transactions = await getTransactions();
    setTransactions(transactions);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.headerSection}>
        <div className={styles.headerControls}>
          <div className={styles.addControls}>
            <button
              className={styles.addButton}
              onClick={onAddTransactionClick}
            >
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
          {transactions.map((transaction) => (
            <div key={transaction.id} className={styles.transactionItem}>
              <div className={styles.itemLeftSide}>
                <span className={styles.transactionDate}>
                  {formatDate(transaction.date)}{" "}
                </span>
                <span className={styles.transactionAccount}>
                  cuenta banco fassil deah static
                </span>
                <span className={styles.transactionIcon}>-</span>
                <span className={styles.transactionNote}>
                  {transaction.note}
                </span>
              </div>
              <div className={styles.itemRightSide}>
                <span className={styles.amount}>{transaction.amount}</span>
                <span
                  className={`material-symbols-outlined ${styles.editIcon}`}
                  onClick={() => onEditButtonClick(transaction)}
                >
                  edit
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
