import TransactionForm from "./TransactionForm";
import styles from "../styles/Layout.module.css";
import { RecentTransactionsList } from "./RecentTransactionsList";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className={styles.outergrid}>
      <header className={styles.header}>
        <div>header deah</div>
      </header>
      <Sidebar />
      <div className={styles.innergrid}>
        <Outlet />
      </div>
    </div>
  );
}
