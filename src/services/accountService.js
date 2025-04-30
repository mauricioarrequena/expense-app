const API_URL = import.meta.env.VITE_API_URL;

export async function getAccounts() {
  const response = await fetch(`${API_URL}/accounts`);
  if (!response.ok) {
    throw new Error("failed to fetch expenses");
  }

  return await response.json();
}
