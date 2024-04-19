export async function fetchCryptoNews() {
  const url = 'https://google-news13.p.rapidapi.com/search?keyword=crypto&lr=en-US';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dfab76ab4fmshe64891d3c279e13p16b39djsn7d55972302a8',
      'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
    }
  };

  const response = await fetch('https://google-news13.p.rapidapi.com/search?keyword=crypto&lr=en-US', options)
  const resData = response.json()
  return resData
}