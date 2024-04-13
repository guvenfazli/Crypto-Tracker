import classes from "./markettrend.module.css"
import CoinCard from "./CoinCard/CoinCard"

export default function MarketTrend({ data }) {

  const filteredData = data.slice(0, 4) // Limiting the data.

  return (
    <div className={classes.trend}>
      <div className={classes.title}>
        <p>Market Trend</p>
      </div>

      <div className={classes.coinShowcase}>
        {filteredData.map((coin) => <CoinCard key={coin.id} data={coin} />)}
      </div>
    </div>
  )
}