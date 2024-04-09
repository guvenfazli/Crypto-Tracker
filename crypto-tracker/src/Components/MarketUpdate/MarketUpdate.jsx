import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import classes from "./marketupdate.module.css"

export default function MarketUpdate({ data }) {

  const limitedData = data.slice(0, 10)
  console.log(limitedData)


  return (
    <div className={classes.marketSection}>

      <div className={classes.marketTitle}>
        <p className={classes.title}>Market Update</p>
      </div>

      <div>
        <p className={classes.categoryTitle}>Crypto Currency Categories</p>
      </div>

      <nav className={classes.tableNav}>
        <div className={classes.buttonNav}>
          <button>Popular</button>
          <button>Price</button>
          <button>Activity</button>
        </div>

        <input type="text" placeholder="Search Coins..." />
      </nav>

      <table>

        <thead>
          <tr>
            <td>NO</td>
            <td>NAME</td>
            <td>LAST PRICE</td>
            <td>CHANGE</td>
            <td>MARKET STATS</td>
            <td>TRADE</td>
          </tr>
        </thead>

        <tbody>

          {limitedData.map((coin, index) =>
            <tr>
              <td data-cell="NO">{index + 1}</td>
              <td data-cell="NAME" className={classes.coinInfo}><div className={classes.coinBg} style={{ backgroundImage: `url(${coin.image})` }} /> {coin.name}</td>
              <td data-cell="PRICE">{coin.current_price} $</td>
              <td data-cell="CHANGE">{coin.price_change_percentage_24h} %</td>
              <td data-cell="MARKET STATS">Here will be chart</td>
              <td data-cell="TRADE"><button>See Details</button></td>
            </tr>)}

        </tbody>

      </table>


    </div>
  )
}