export const dateToTime = (date: string) => {
  if (date === "current") {
    const valueDate = new Date();
    return valueDate.getTime();
  } else {
    const valueDate = new Date(date);
    return valueDate.getTime();
  }
};

export const formatDate = (date = "2022-01-01") => {
  var options: any = {
    month: "short",
    day: "numeric",
  };
  var today = new Date(date);
  return today.toLocaleDateString("en-US", options);
};
