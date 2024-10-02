function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  const bestToBuyInd = prices.indexOf(Math.min(...prices));

  const bestToSellInd = prices.indexOf(Math.max(...prices.slice(bestToBuyInd)));
  if (bestToBuyInd < bestToSellInd) {
    maxProfit = prices[bestToSellInd] - prices[bestToBuyInd];
  }
  return maxProfit;
}

export default maxProfit;
