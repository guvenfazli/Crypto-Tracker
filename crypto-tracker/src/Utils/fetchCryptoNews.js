export async function fetchCryptoNews() {
  const url = 'https://google-news13.p.rapidapi.com/search?keyword=crypto&lr=en-US';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a727916748msh7b3c9e3e6d482d5p1ed64cjsne95a64ad30db',
      'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
    }
  };

  const response = await fetch('https://google-news13.p.rapidapi.com/search?keyword=crypto&lr=en-US', options)
  const resData = response.json()
  return resData
}