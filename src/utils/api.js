import { getToken } from ".";
import { BACKEND_URL } from "../data";

export const registerUserApi = async (data) => {
  const res = await fetch(`${BACKEND_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const loginUserApi = async (data) => {
  const res = await fetch(`${BACKEND_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const getWorkspaceApi = async (query) => {
  const res = await fetch(`${BACKEND_URL}/workspaces?${query}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return await res.json();
};

export const addWorkspaceApi = async (space) => {
  const res = await fetch(`${BACKEND_URL}/workspaces/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(space),
  });

  return await res.json();
};

export const deleteWorkspaceApi = async (_id) => {
  return await fetch(`${BACKEND_URL}/workspaces/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const editWorkspaceApi = async (space, _id) => {
  const res = await fetch(`${BACKEND_URL}/workspaces/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(space),
  });

  return await res.json();
};

export const checkSlugApi = async (newValue) => {
  const res = await fetch(`${BACKEND_URL}/workspaces/check-slug`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      slug: newValue,
    }),
  });

  return res.json();
};
