export async function fetchCryptoNews() {
  const url = 'https://google-news13.p.rapidapi.com/search?keyword=crypto&lr=en-US';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '37574890f8mshf7df8902a5e92e6p1081e2jsnbd77d46d9ddc',
      'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
    }
  };

  const response = await fetch('https://google-news13.p.rapidapi.com/search?keyword=crypto&lr=en-US', options)
  const resData = response.json()
  return resData
}