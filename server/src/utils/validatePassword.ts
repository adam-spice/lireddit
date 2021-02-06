export const validatePassword = (password: string, fieldName: string) => {
  if (password.length <= 5) {
    return [
      {
        field: fieldName,
        message: "Password must be at least 6 characters long",
      },
    ];
  }
  return null;
};
