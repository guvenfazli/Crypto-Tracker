export async function fetchCoins() {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-NrAyxAV2Dq1ebVfGrrNScEua' }
  };

  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
  const data = await response.json();
  
  return data
}