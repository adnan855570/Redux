import { Add, Remove } from "../constant/";

export const addToCart = (data) => {
  console.warn("actions", data);
  return {
    type: Add,
    data: data,
  };
};

export const removeToCart = (data) => {
  console.warn("actions", data);

  return {
    type: Remove,
    data: data,
  };
};
