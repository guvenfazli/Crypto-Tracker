import classes from "./markettrend.module.css"
import CoinCard from "./CoinCard/CoinCard"

export default function MarketTrend(){
  return (
    <div className={classes.trend}>
      <div className={classes.title}>
        <p>Market Trend</p>
      </div>

      <div className={classes.coinShowcase}>
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
      </div>
    </div>
  )
}