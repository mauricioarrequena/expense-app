import styles from "../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebarList}>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `${styles.sidebarItem} ${isActive ? styles.active : ""}`
        }
      >
        <span className={`material-symbols-outlined ${styles.icon}`}>
          newspaper
        </span>
        <span className={styles.itemTitle}>Dashboard</span>
      </NavLink>
      <NavLink
        to="/transactions"
        className={({ isActive }) =>
          `${styles.sidebarItem} ${isActive ? styles.active : ""}`
        }
      >
        <span className={`material-symbols-outlined ${styles.icon}`}>
          sync_alt
        </span>
        <span className={styles.itemTitle}>Transactions</span>
      </NavLink>
      <NavLink
        to="/accounts"
        className={({ isActive }) =>
          `${styles.sidebarItem} ${isActive ? styles.active : ""}`
        }
      >
        <span className={`material-symbols-outlined ${styles.icon}`}>
          credit_card
        </span>
        <span className={styles.itemTitle}>Accounts</span>
      </NavLink>
      <NavLink
        to="/reports"
        className={({ isActive }) =>
          `${styles.sidebarItem} ${isActive ? styles.active : ""}`
        }
      >
        <span className={`material-symbols-outlined ${styles.icon}`}>
          moving
        </span>
        <span className={styles.itemTitle}>Reports</span>
      </NavLink>
      <NavLink
        to="/budget"
        className={({ isActive }) =>
          `${styles.sidebarItem} ${isActive ? styles.active : ""}`
        }
      >
        <span className={`material-symbols-outlined ${styles.icon}`}>
          shopping_basket
        </span>
        <span className={styles.itemTitle}>Budget</span>
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `${styles.sidebarItem} ${isActive ? styles.active : ""}`
        }
      >
        <span className={`material-symbols-outlined ${styles.icon}`}>tune</span>
        <span className={styles.itemTitle}>Settings</span>
      </NavLink>
    </div>
  );
}
