import Header from "../Components/Header/Header"
import Start from "../Components/Start/Start"
import MarketTrend from "../Components/MarketTrend/MarketTrend"
import Features from "../Components/Features/Features"
import NewCrypto from "../Components/NewCrypto/NewCrypto"
import MarketUpdate from "../Components/MarketUpdate/MarketUpdate"
import HowToGetStarted from "../Components/HowToGetStarted/HowToGetStarted"
/* API ILE BURAYA NEWS GELECEK */
import Footer from "../Components/Footer/Footer"
import Test from "../Components/Test/Test"

export default function HomePage() {
  return (
    <>
      <Header />
      <Start />
      <MarketTrend />
      <Features />
      <NewCrypto />
      <MarketUpdate />
      <HowToGetStarted />
      <Footer />
      <Test />
    </>

  )
}