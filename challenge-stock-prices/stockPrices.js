const best = prices => {
    let maxDiff = 0
    let lowSoFar
  
    for (let i = 0; i < prices.length; i++) {
      if (lowSoFar === undefined || prices[i] < lowSoFar) {
        lowSoFar = prices[i]
      }
  
      let diff = prices[i] - lowSoFar
  
      if (diff > maxDiff) {
        maxDiff = diff
      }
    }
  
    return maxDiff
  }
let prices = [10,20,30,25,21,14,16,25]
  console.log ( best(prices))