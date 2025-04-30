import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions.jsx";
import Accounts from "./pages/Accounts.jsx";
import Reports from "./pages/Reports.jsx";
import Budget from "./pages/Budget.jsx";
import Settings from "./pages/Settings.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="reports" element={<Reports />} />
          <Route path="budget" element={<Budget />} />
          <Route path="settings" element={<Settings />} />
          {/* more routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
