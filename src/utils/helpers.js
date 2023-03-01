export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  }).format(number / 1);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
//   console.log(unique);
  if (type === "colors") {
    unique = unique.flat();
  }

//   console.log(unique);
  return ["all", ...new Set(unique)];
};