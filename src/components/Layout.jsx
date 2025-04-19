import TransactionForm from "./TransactionForm";
import styles from "../styles/layout.module.css";


function Layout() {
  return (
    <div className={styles.outerGrid}>
      <div className={styles.header}>
        <p>deah header</p>
      </div>
      <div className={styles.sidebar}>
        <p>deah sidebar</p>
      </div>
      <div className={styles.innerGrid}>
        <TransactionForm />
      </div>
    </div>
  );
}

export default Layout;
