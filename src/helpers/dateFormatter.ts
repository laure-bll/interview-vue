const dateFormatter = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month < 10 ? `0${month}` : month}/${year}`;
};

export default dateFormatter;
