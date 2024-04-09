import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import classes from "./marketupdate.module.css"

import SmallChart from './SmallChart/SmallChart';
import { useState } from 'react';

export default function MarketUpdate({ data }) {
  const [details, setDetails] = useState()
  const limitedData = data.slice(0, 10)
  console.log(limitedData)

  function renderDetails(coin) {
    setDetails(coin)
  }


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


      {details ? <SmallChart detail={setDetails} data={details} /> :
        <table>

          <thead>
            <tr>
              <td>NO</td>
              <td>NAME</td>
              <td>LAST PRICE</td>
              <td>CHANGE</td>
              <td>TRADE</td>
            </tr>
          </thead>

          <tbody>

            {limitedData.map((coin, index) =>
              <tr key={coin.id}>
                <td data-cell="NO">{index + 1}</td>
                <td data-cell="NAME" className={classes.coinInfo}><div className={classes.coinBg} style={{ backgroundImage: `url(${coin.image})` }} /> {coin.name}</td>
                <td data-cell="PRICE">{coin.current_price.toFixed(1)} $</td>
                <td data-cell="CHANGE">{coin.price_change_percentage_24h} %</td>
                <td data-cell="TRADE"><button onClick={() => renderDetails(coin)}>See Details</button></td>
              </tr>)}

          </tbody>

        </table>

      }



    </div>
  )
}