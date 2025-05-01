import styles from "../styles/AddAcount.module.css";
import { useState } from "react";
import AccountGroup from "../enums/AccountGroup";
import { postAccount } from "../services/accountService";

export default function AddAcount({ onCloseButtonClick, onAccountAdded }) {
  const accountGroups = [
    { id: AccountGroup.CASH, name: "Cash" },
    { id: AccountGroup.BANK_ACCOUNT, name: "Bank Account" },
    { id: AccountGroup.DEPOSIT, name: "Deposit" },
    { id: AccountGroup.CREDIT, name: "Credit" },
    { id: AccountGroup.ASSET, name: "Asset" },
  ];
  const [name, setName] = useState("");
  const [group, setSelectedGroup] = useState(AccountGroup.CASH);
  const [isDollar, setIsDollar] = useState(false);
  const [balance, setBalance] = useState(0);
  const [isShownOnDashboard, setIsShownDashboard] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const newAccount = {
      name,
      group: group,
      dollar: isDollar,
      balance: parseFloat(balance),
      showOnDashboard: isShownOnDashboard,
    };

    try {
      const result = await postAccount(newAccount);
      onAccountAdded();
      onCloseButtonClick();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.topSection}>
        <div className={styles.titleContainer}>
          <span className={`material-symbols-outlined ${styles.icon}`}>
            draft
          </span>
          <span className={styles.title}>New Account</span>
        </div>
        <button className={styles.closeButton} onClick={onCloseButtonClick}>
          x
        </button>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.middleLeft}>
          <span className={styles.name}>Name</span>
          <input
            type="text"
            className={styles.inputName}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className={styles.dollarContainer}>
            <input
              type="checkbox"
              className={styles.dollarCheckbox}
              checked={isDollar}
              onChange={(e) => setIsDollar(e.target.checked)}
            />
            <label className={styles.dollarLabel}>US Dollarr</label>
          </div>
          <div className={styles.dashboardContainer}>
            <input
              type="checkbox"
              className={styles.dashboardCheckbox}
              checked={isShownOnDashboard}
              onChange={(e) => setIsShownDashboard(e.target.checked)}
            />
            <label className={styles.dashboardLabel}>Show on dashboard</label>
          </div>
        </div>
        <div className={styles.middleRight}>
          <span className={styles.group}>Group</span>
          <select
            className={styles.selectType}
            onChange={(e) => {
              setSelectedGroup(e.target.value);
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
          <div className={styles.balanceContainer}>
            <input
              type="number"
              className={styles.balanceInput}
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
            <span className={styles.dollarMark}>USD</span>
          </div>
          <div className={styles.submitContainer}>
            <input
              type="submit"
              className={styles.submitButton}
              value="Save Account"
            />
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}></div>
    </form>
  );
}
