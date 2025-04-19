import styles from '../styles/TransactionForm.module.css';

function TransactionForm() {
  return (
    <form className={styles.transactionFormContainer}>
      New Transaction
      <div className={styles.formBodyContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.expenseButton}>Expense</div>
          <div className={styles.incomeButton} >Income</div>
        </div>
        <div className={styles.controlsContainer}>
          <div className={styles.row1Container}>
            From
            <div className={styles.row1Inputs}>
              <select>
                <option value="caja de ahorro"></option>
              </select>
              <div className={styles.amountContainer}>
                <input className="" type="number" />
                <div>BOB</div>
              </div>
            </div>
          </div>
          <div className={styles.row2Container}>
            Tags
            <div className={styles.row2Inputs}>
              <select>
                <option value="choose existing tags or add new"></option>
              </select>
              <div className={styles.dateContainer}>
                <input className="" type="date" />
                <div>ICON</div>
              </div>
            </div>
            <div className={styles.row2Controls}>
              <input className={styles.noteInput} type="text" />
              <button>Add Expense</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TransactionForm;