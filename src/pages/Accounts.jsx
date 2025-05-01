import { useEffect, useState } from "react";
import styles from "../styles/Accounts.module.css";
import AccountsList from "../components/AccountsList";
import AddAcount from "../components/AddAccount";
import { getAccounts, deleteAccount } from "../services/accountService";

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [accountToEdit, setAccountToEdit] = useState(null);
  const [totalBalance, setTotalBalance] = useState(0);

  async function deleteSelectedAccount(account) {
    await deleteAccount(account.id);
    await fetchAccounts();
  }

  async function fetchAccounts() {
    const accounts = await getAccounts();
    setAccounts(accounts);
  }

  useEffect(() => {
    fetchAccounts();
  }, []);

  useEffect(() => {
    const total = accounts.reduce(
      (sum, account) => sum + parseFloat(account.balance),
      0
    );
    setTotalBalance(total);
  }, [accounts]);

  const openModal = () => {
    setEditMode(false);
    setAccountToEdit(null);
    setIsModalOpen(true);
  };

  function openModalEditMode(account) {
    setEditMode(true);
    setAccountToEdit(account);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <AccountsList
        className={styles.customAccountList}
        onAddButtonClick={openModal}
        accounts={accounts}
        onEditButtonClick={openModalEditMode}
        onDeleteButtonClick={deleteSelectedAccount}
        totalBalance={totalBalance}
      />
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <AddAcount
              onCloseButtonClick={closeModal}
              onAccountAdded={fetchAccounts}
              editMode={editMode}
              accountToEdit={accountToEdit}
            />
          </div>
        </div>
      )}
    </div>
  );
}
