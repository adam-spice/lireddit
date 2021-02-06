export const __prod__ = process.env.NODE_ENV === "production";
export const PORT = process.env.PORT || 4000;
export const COOKIE_NAME = "qid";
export const FRONT_END_URL = __prod__
  ? process.env.FRONT_END_URL
  : "http://localhost:3000";
export const FORGET_PASSWORD_PREFIX = "forget-password:";
