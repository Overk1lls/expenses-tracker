export const getProperTransactionAmountDisplay = (amount: number) => {
  const sign = amount < 0 ? '-' : '+';
  return `${sign}$${Math.abs(amount)}`;
};
