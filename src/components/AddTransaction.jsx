import { useEffect, useState } from "react";
import styles from "../styles/AddTransaction.module.css";
import { getAccounts } from "../services/accountService";
import { postTransaction } from "../services/transactionService";

export default function AddTransaction({ oncloseButtonClick }) {
  const [transactionType, setTransactionType] = useState(0);
  const [accounts, setAccouts] = useState([]);
  const [selectedAccount, setSelectedAccout] = useState(accounts[0]);
  const [amount, setAmount] = useState(0);
  const [tags, setTags] = useState([
    { id: 0, name: "salary" },
    { id: 1, name: "odd jobs" },
  ]);
  const [selectedTag, setSelectedTag] = useState(tags[0]);
  const [date, setDate] = useState(Date.now());
  const [note, setNote] = useState("");

  async function fetchAccounts() {
    const accounts = await getAccounts();
    setAccouts(accounts);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // const transaction = {
    //   type: transactionType,
    //   account: selectedAccount,
    //   amount: amount,
    //   tag: selectedTag.id,
    //   date: date,
    //   note: note,
    // };
    const transaction = {
      amount: amount,
      date: date,
      note: note,
    };
    const result = await postTransaction(transaction);
    console.log(`you submitted the form ${result}`);
  }

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <div className={styles.titleContainer}>
          <span className={`material-symbols-outlined ${styles.titleIcon}`}>
            draft
          </span>
          <span className={styles.titleText}>New Transaction</span>
        </div>
        <button className={styles.closeButton} onClick={oncloseButtonClick}>
          x
        </button>
      </div>
      <div className={styles.controlSection}>
        <button className={`${styles.expenseButton} ${styles.controlButton}`}>
          Expense
        </button>
        <button className={`${styles.incomeButton} ${styles.controlButton}`}>
          Income
        </button>
      </div>
      <form
        className={styles.mainSection}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <span className={styles.fromText}>From</span>
        <div className={styles.row1}>
          <select
            className={`${styles.accountSelect} ${styles.selectControl}`}
            value={selectedAccount}
            onChange={(e) => setSelectedAccout(e.target.value)}
          >
            {accounts.map((account) => {
              return (
                <option key={account.id} value={account.id}>
                  {account.name}
                </option>
              );
            })}
          </select>
          <div className={styles.amountContainer}>
            <input
              type="number"
              className={styles.amountInput}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <span className={styles.amountIcon}>BOB</span>
          </div>
        </div>
        <span className={styles.tagsText}>Tags</span>
        <div className={styles.row2}>
          <select className={`${styles.tagSelect} ${styles.selectControl}`}>
            {tags.map((tag) => (
              <option
                key={tag.id}
                className={styles.tagOption}
                value={selectedTag.id}
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                {tag.name}
              </option>
            ))}
          </select>
          <div className={styles.dateContainer}>
            <input
              type="date"
              className={styles.dateInput}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row3}>
          <input
            type="text"
            className={styles.noteInput}
            placeholder="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <input
            type="submit"
            value="Add Expense"
            className={styles.submitButton}
          />
        </div>
      </form>
    </div>
  );
}
