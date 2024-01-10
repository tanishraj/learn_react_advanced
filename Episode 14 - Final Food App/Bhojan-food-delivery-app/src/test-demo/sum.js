export const sum = (a, b) => {
  if (typeof a !== "number" && typeof b !== "number") return;
  return Number(a) + Number(b);
};
