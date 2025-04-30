import { useState } from "react";
import styles from "../styles/TransactionForm.module.css";
import { useEffect } from "react";
import { getAccounts } from "../services/accountService";
import { getTransactionTags } from "../services/transactionTagService";
import { postTransaction } from "../services/transactionService";

export default function TransactionForm() {
  const [accounts, setAccounts] = useState([]);
  const [transactionTags, setTransactionTags] = useState([]);
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [selectedAccount, setSelectedAccount] = useState({});
  const [selectedTag, setSelectedTag] = useState({});

  useEffect(() => {
    const fetchAccounts = async () => {
      try {1
        const data = await getAccounts();
        setAccounts(data);
      } catch (error) {
        console.error("Error loading expenses:", error);
      }
    };

    const fetchTransactionTags = async () => {
      try {
        const data = await getTransactionTags();
        setTransactionTags(data);
      } catch (error) {
        console.log("error loading transaction tags", error);
      }
    };

    fetchAccounts();
    fetchTransactionTags();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = {
      amount: parseFloat(amount),
      note,
      date,
    };
    try {
      const createdTransaction = await postTransaction(newTransaction);
      console.log('transaction added', createdTransaction);
      
    } catch (error) {
      console.error('failed to created transaction', error);
    }
  };

  return (
    <form className={styles.transactionFormContainer} onSubmit={handleSubmit}>
      New Transaction
      <div className={styles.formBodyContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.expenseButton}>Expense</div>
          <div className={styles.incomeButton}>Income</div>
        </div>
        <div className={styles.controlsContainer}>
          <div className={styles.row1Container}>
            From
            <div className={styles.row1Inputs}>
              <select
                onChange={(e) => {
                  setSelectedAccount(e.target.value);
                }}
              >
                {accounts.map((expense) => (
                  <option key={expense.id} value={expense.accountName}>
                    {expense.accountName}
                  </option>
                ))}
              </select>
              <div className={styles.amountContainer}>
                <input
                  className=""
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                <div>BOB</div>
              </div>
            </div>
          </div>
          <div className={styles.row2Container}>
            Tags
            <div className={styles.row2Inputs}>
              <select
                onChange={(e) => {
                  setSelectedTag(e.target.value);
                }}
              >
                {transactionTags.map((transactionTag) => (
                  <option key={transactionTag.id} value={transactionTag.name}>
                    {transactionTag.name}
                  </option>
                ))}
              </select>
              <div className={styles.dateContainer}>
                <input
                  className=""
                  type="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
                <div>ICON</div>
              </div>
            </div>
            <div className={styles.row2Controls}>
              <input
                className={styles.noteInput}
                type="text"
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              />
              <button type="submit">Add Expense</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

