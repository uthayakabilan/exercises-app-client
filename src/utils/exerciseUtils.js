export const capitaliseData = (data) => {
  if (data.length > 0) {
    const str = [...data];
    str[0] = str[0].toUpperCase();
    return str.join("");
  } else {
    return "";
  }
};
