export async function fetchCoins() {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-NrAyxAV2Dq1ebVfGrrNScEua' }
  };

  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
  const data = await response.json();
  
  return data
}

export async function fetchCoinData(coinId, days){
  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-NrAyxAV2Dq1ebVfGrrNScEua'}
  };

  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`, options)
  const resData = await response.json();
  return resData;
}



