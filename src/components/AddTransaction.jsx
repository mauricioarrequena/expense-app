import styles from "../styles/AddTransaction.module.css";

export default function AddTransaction({ oncloseButtonClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <div className={styles.titleContainer}>
          <span className={`material-symbols-outlined ${styles.titleIcon}`}>
            draft
          </span>
          <span className={styles.titleText}>New Transaction</span>
        </div>
        <button className={styles.closeButton} onClick={oncloseButtonClick}>x</button>
      </div>
      <div className={styles.controlSection}>
        <button className={`${styles.expenseButton} ${styles.controlButton}`}>
          Expense
        </button>
        <button className={`${styles.incomeButton} ${styles.controlButton}`}>
          Income
        </button>
      </div>
      <div className={styles.mainSection}>
        <span className={styles.fromText}>From</span>
        <div className={styles.row1}>
          <select className={`${styles.accountSelect} ${styles.selectControl}`}>
            <option>cuenta bancaria bcp</option>
          </select>
          <div className={styles.amountContainer}>
            <input type="number" className={styles.amountInput} />
            <span className={styles.amountIcon}>BOB</span>
          </div>
        </div>
        <span className={styles.tagsText}>Tags</span>
        <div className={styles.row2}>
          <select className={`${styles.tagSelect} ${styles.selectControl}`}>
            <option>choose existing tags or add new</option>
          </select>
          <div className={styles.dateContainer}>
            <input type="date" className={styles.dateInput} />
          </div>
        </div>
        <div className={styles.row3}>
          <input type="text" className={styles.noteInput} placeholder="Note" />
          <input
            type="submit"
            value="Add Expense"
            className={styles.submitButton}
          />
        </div>
      </div>
    </div>
  );
}
