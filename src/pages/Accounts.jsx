import { useState } from "react";
import styles from "../styles/Accounts.module.css";
import AccountsList from "../components/AccountsList";
import AddAcount from "../components/AddAccount";
import { getAccounts } from "../services/accountService";

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function fetchAccounts() {
    const accounts = await getAccounts();
    setAccounts(accounts);
  }

  useState(() => {
    fetchAccounts();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <AccountsList
        className={styles.customAccountList}
        onAddButtonClick={openModal}
        accounts={accounts}
      />
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <AddAcount onCloseButtonClick={closeModal}
            onAccountAdded={fetchAccounts} />
          </div>
        </div>
      )}
    </div>
  );
}
