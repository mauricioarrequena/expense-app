const API_URL = import.meta.env.VITE_API_URL;

export async function postAccount(account) {
  const response = await fetch(`${API_URL}/accounts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(account),
  });

  if (!response.ok) {
    throw new Error("failed to create accoutn");
  }

  return await response.json();
}

export async function getAccounts() {
  const response = await fetch(`${API_URL}/accounts`);
  if (!response.ok) {
    throw new Error("failed to fetch expenses");
  }

  return await response.json();
}

export async function putAccount(id, accountToUpdate) {
  const response = await fetch(`${API_URL}/accounts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(accountToUpdate),
  });

  if (!response.ok) {
    throw new Error("failed to update account");
  }

  return await response.json();
}

export async function deleteAccount(id) {
  const response = await fetch(`${API_URL}/accounts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("failed to delete");
  }

  return response;
}
