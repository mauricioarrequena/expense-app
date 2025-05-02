import styles from "../styles/Transactions.module.css";
import { useState } from "react";
import TransactionControl from "../components/TransactionControl";
import AddTransaction from "../components/AddTransaction";

export default function Transactions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.container}>
      <TransactionControl
        className={styles.customTransactionControl}
        onAddTransactionClick={openModal}
      />
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
          <AddTransaction oncloseButtonClick={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}
