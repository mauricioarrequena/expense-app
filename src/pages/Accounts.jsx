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
      <button onClick={openModal}>open modal</button>
      <AccountsList className={styles.customAccountList} />
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <AddAcount />
            {/* <button className={styles.closeButton} onClick={closeModal}>Close Modal</button> */}
          </div>
        </div>
      )}
    </div>
  );
}
