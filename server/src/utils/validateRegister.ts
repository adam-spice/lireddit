import { UsernamePasswordInput } from "src/resolvers/UsernamePasswordInput";
import { validateEmail } from "./validateEmail";
import { validatePassword } from "./validatePassword";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "Username must be at least 3 characters long",
      },
    ];
  }

  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "Can not include an @",
      },
    ];
  }

  if (!validateEmail(options.email)) {
    return [
      {
        field: "email",
        message: "Invalid email address",
      },
    ];
  }

  validatePassword(options.password, "password");

  return null;
};
