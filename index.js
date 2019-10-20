module.exports = (arr = []) => {
  let sortedElementsCount = 0
  while (sortedElementsCount !== arr.length) {
    for (let i=0; i<arr.length - sortedElementsCount - 1; i++) {
      if (arr[i] > arr[i+1]) { const min = arr[i+1]; arr[i+1] = arr[i]; arr[i] = min }
    }
    sortedElementsCount++
  }
  return arr
}