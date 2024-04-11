import Header from "../Components/Header/Header"
import Start from "../Components/Start/Start"
import MarketTrend from "../Components/MarketTrend/MarketTrend"
import Features from "../Components/Features/Features"
import NewCrypto from "../Components/NewCrypto/NewCrypto"
import MarketUpdate from "../Components/MarketUpdate/MarketUpdate"
import HowToGetStarted from "../Components/HowToGetStarted/HowToGetStarted"
import CryptoNews from "../Components/CryptoNews/CryptoNews"
import Footer from "../Components/Footer/Footer"

/* H O O K S */
import { useLoaderData } from "react-router-dom"

/* U T I L S */
import { fetchCoins } from "../Utils/fetchCoins"
import { fetchCryptoNews } from "../Utils/fetchCryptoNews"

export default function HomePage() {

  const { data } = useLoaderData();
  const { news } = useLoaderData();

  return (
    <>
      <Header />
      <Start />
      <MarketTrend data={data} />
      <Features />
      <NewCrypto />
      <MarketUpdate data={data} />
      <HowToGetStarted />
      <CryptoNews news={news} />
      <Footer />
    </>

  )
}

export async function loader() {
  const allData = {
    data: await fetchCoins(),
    news: await fetchCryptoNews()
  }
  
  return allData;
}