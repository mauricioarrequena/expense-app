import styles from "../styles/RecentTransactionsList.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { getTransactions } from "../services/transactionService";

export function RecentTransactionsList() {
  const [transactions, setTransactinos] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      setTransactinos(transactions);
    };

    fetchTransactions();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Recent Transactions</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.listContainer}>
          {transactions.map((transaction) => {
            return (
              <div className={styles.listItem}>
                <div className={styles.date}>{transaction.date}</div>
                <div className={styles.name}>{transaction.note}</div>
                <div className={styles.amount}>{transaction.amount}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
