import styles from "../styles/Accounts.module.css";
import AccountsList from "../components/AccountsList";
import AddAcount from "../components/AddAccount";
import { useState } from "react";

export default function Accounts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      />
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <AddAcount onCloseButtonClick={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}
