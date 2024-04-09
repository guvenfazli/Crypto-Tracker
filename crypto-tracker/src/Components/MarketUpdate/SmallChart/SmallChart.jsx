import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, domain, Label } from 'recharts';
import classes from "./smallchart.module.css"
/* U T I L S */
import { fetchCoinData } from '../../../Utils/fetchCoins';
import { useEffect, useState } from 'react';

export default function SmallChart({ data, detail }) {

  const [coinData, setCoinData] = useState();

  useEffect(() => {
    async function coinData() {
      const priceHistory = await fetchCoinData(data.id)
      const limitedHistory = priceHistory.prices.slice(0, 288)
      setCoinData(() => {
        let prices = limitedHistory.map((price) => { return { value: price[1].toFixed(2) } })
        let priceList = prices
        return priceList
      })
    }

    coinData();
  }, [])

  console.log(coinData)

  function goBack(){
    detail(undefined)
  }



  return (
    <div className={classes.details}>
      <button onClick={goBack}>Back</button>
      <div className={classes.coinIcon} style={{backgroundImage: `url(${data.image})`}}/>
      <div className={classes.coinInfo}>
        <div>
          <p className={classes.title}>{data.name}</p>
          <p>Current Price: {data.current_price} $</p>
        </div>

        <div>
          <p>Price Change as Percentage in 24h: {data.price_change_percentage_24h.toFixed(1)} %</p>
          <p>Price Change in 24h: {data.price_change_24h.toFixed(1)} %</p>
        </div>

      </div>

      <div>Price Change in 24h in Graphics</div>




      <ResponsiveContainer  width="100%" height={700}>
        <LineChart data={coinData}>
          <Line strokeWidth={2.5} stroke={data.price_change_24h > 0 ? '#4CAF50' : '#D32F2F'} dot={false} dataKey="value" />
          <XAxis tick={false}/>
          <YAxis style={{fontSize: "0.7rem", padding: "0"}}  domain={['dataMin', 'dataMax']} values='value'/>
          <CartesianGrid  stroke='#555773'/>
        </LineChart>
        
      </ResponsiveContainer>
    </div>
  )
}