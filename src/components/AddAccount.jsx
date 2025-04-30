import { useState } from "react";
import styles from "../styles/AddAcount.module.css";
import AccountGroup from "../enums/AccountGroup";
import { postAccount } from "../services/accountService";

export default function AddAcount() {
  const [name, setName] = useState("");
  const accountGroups = [
    { id: AccountGroup.CASH, name: "Cash" },
    { id: AccountGroup.BANK_ACCOUNT, name: "Cash" },
    { id: AccountGroup.DEPOSIT, name: "Deposit" },
    { id: AccountGroup.CREDIT, name: "Credit" },
    { id: AccountGroup.ASSET, name: "Asset" },
  ];
  const [selectedAccountGroup, setSelectedAccountGroup] = useState(null);
  const [dollar, setDollar] = useState(false);
  const [balance, setBalance] = useState(0);
  const [dashboard, setDashboard] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const newAccount = {
      name,
      group: selectedAccountGroup,
      dollar: dollar,
      balance: parseFloat(balance),
      showOnDashboard: dashboard,
    };

    try {
      const result = await postAccount(newAccount);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.topSection}>
        <div className={styles.titleContainer}>
          <span>icon</span>
          <span>New Account</span>
        </div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.section1}>
          <span className={styles.name}>Name</span>
          <span className={styles.group}>Group</span>
        </div>
        <div className={styles.section2}>
          <input
            type="text"
            className={styles.inputName}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <select
            className={styles.selectType}
            onChange={(e) => {
              setSelectedAccountGroup(e.target.value);
            }}
          >
            {accountGroups.map((accountGroup) => {
              return (
                <option key={accountGroup.id} value={accountGroup.id}>
                  {accountGroup.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.section3}>
          <div className={styles.dollarContainer}>
            <input
              type="checkbox"
              className={styles.dollarCheckbox}
              value={dollar}
              onChange={(e) => setDollar(e.target.value)}
            />
            <label> us dollar</label>
          </div>
          <div className={styles.balanceContainer}>
            <input
              type="number"
              className={styles.balanceInput}
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
            <span className={styles.dollarMark}>USD</span>
          </div>
        </div>
        <div className={styles.section4}>
          <div className={styles.dashboardContainer}>
            <input
              type="checkbox"
              className={styles.dashboardCheckbox}
              value={dashboard}
              onChange={(e) => setDashboard(e.target.value)}
            />
            <label>Show on dashboard</label>
          </div>
          <div className={styles.submitContainer}>
            <input type="submit" className={styles.submitButton} />
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}></div>
    </form>
  );
}
