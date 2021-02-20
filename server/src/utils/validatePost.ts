import { PostInput } from "../resolvers/PostInput";

export const validatePost = (options: PostInput) => {
  if (options.title.length <= 2) {
    return [
      {
        field: "title",
        message: "title must be at least 3 characters long",
      },
    ];
  }

  if (options.text.length <= 2) {
    return [
      {
        field: "title",
        message: "title must be at least 3 characters long",
      },
    ];
  }

  return null;
};
