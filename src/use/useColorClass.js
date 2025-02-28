export const useColorClass = (price, threshold) => {
  if (price > threshold) return 'text-positive'
  return 'text-negative'
}
