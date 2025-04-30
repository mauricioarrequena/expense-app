const API_URL = import.meta.env.VITE_API_URL;


export async function postTransaction(transaction) {
  const response = await fetch(`${API_URL}/transactions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transaction),
  });

  if (!response.ok) {
    throw new Error("failed to create transacion");
  }

  return await response.json();
}

export async function getTransactions() {
  const response = await fetch(`${API_URL}/transactions`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
}
