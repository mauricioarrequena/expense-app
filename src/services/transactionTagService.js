const API_URL = import.meta.env.VITE_API_URL;


export async function getTransactionTags() {
  const response = await fetch(`${API_URL}/transactionTags`);
  if (!response.ok) {
    throw new Error('failed to fetch transactionTags');  
  }

  return await response.json();
}
