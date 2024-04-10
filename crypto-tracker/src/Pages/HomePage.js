import Header from "../Components/Header/Header"
import Start from "../Components/Start/Start"
import MarketTrend from "../Components/MarketTrend/MarketTrend"
import Features from "../Components/Features/Features"
import NewCrypto from "../Components/NewCrypto/NewCrypto"
import MarketUpdate from "../Components/MarketUpdate/MarketUpdate"
import HowToGetStarted from "../Components/HowToGetStarted/HowToGetStarted"
/* API ILE BURAYA NEWS GELECEK */
import Footer from "../Components/Footer/Footer"

/* H O O K S */
import { useLoaderData } from "react-router-dom"

/* U T I L S */
import { fetchCoins } from "../Utils/fetchCoins"

export default function HomePage() {

  const data = useLoaderData();
  
  return (
    <>
      <Header />
      <Start />
      <MarketTrend data={data}/>
      <Features />
      <NewCrypto />
      <MarketUpdate data={data}/>
      <HowToGetStarted />
      <Footer />
    </>

  )
}

export async function loader(){
  const data = await fetchCoins();
  return data;
}