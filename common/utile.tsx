export const dateToTime = (date: string) => {
  if (date === "current") {
    const valueDate = new Date();
    return valueDate.getTime();
  } else {
    const valueDate = new Date(date);
    return valueDate.getTime();
  }
};
