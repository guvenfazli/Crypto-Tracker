export async function fetchCryptoNews() {
  const url = 'https://google-news13.p.rapidapi.com/search?keyword=crypto&lr=en-US';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ec54d1c6e3msh4efcdc1eb857d38p1c7d44jsn1335bbc620af',
      'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
    }
  };

  const response = await fetch('https://google-news13.p.rapidapi.com/search?keyword=crypto&lr=en-US', options)
  const resData = response.json()
  return resData
}