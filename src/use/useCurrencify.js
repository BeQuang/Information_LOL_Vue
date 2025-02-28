export const useCurrencify = (price) => {
  // format: "$1,234.56" | "$123.00"
  const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return formattedPrice
}
