export const STORAGE_KEYS = {
  TOKEN: "estateflow_token",
  USER: "estateflow_user",
  REMEMBER_ME: "remember_me",
};

export const saveAuth = (token, user, rememberMe) => {
  const storage = rememberMe ? localStorage : sessionStorage;

  storage.setItem(STORAGE_KEYS.TOKEN, token);
  storage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));

  if (rememberMe) {
    localStorage.setItem(STORAGE_KEYS.REMEMBER_ME, "true");
  } else {
    localStorage.removeItem(STORAGE_KEYS.REMEMBER_ME);
  }
};

export const getToken = () => {
  return (
    localStorage.getItem(STORAGE_KEYS.TOKEN) ||
    sessionStorage.getItem(STORAGE_KEYS.TOKEN)
  );
};

export const getUser = () => {
  const user =
    localStorage.getItem(STORAGE_KEYS.USER) ||
    sessionStorage.getItem(STORAGE_KEYS.USER);

  return user ? JSON.parse(user) : null;
};

export const clearAuth = () => {
  localStorage.removeItem(STORAGE_KEYS.TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER);
  localStorage.removeItem(STORAGE_KEYS.REMEMBER_ME);

  sessionStorage.removeItem(STORAGE_KEYS.TOKEN);
  sessionStorage.removeItem(STORAGE_KEYS.USER);
};