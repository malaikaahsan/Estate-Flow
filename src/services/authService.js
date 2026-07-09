import { USERS } from "../constants/users";

export const loginUser = (email, password) => {
  const user = USERS.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  const token = `estateflow-jwt-${Date.now()}-${Math.random()
    .toString(36)
    .substring(2)}`;

  return {
    success: true,
    token,
    user,
  };
};