/* L I B R A R Y */
import { YAxis, AreaChart, Area } from 'recharts';

/* A S S E T S */
import arrow from '../../../Assets/jumpVector.png'
import classes from "./coincard.module.css"

/* H O O K S */
import { useEffect, useState } from 'react';

/* U T I L S */
import { fetchCoinData } from '../../../Utils/fetchCoins';


export default function CoinCard({ data }) {

  const [coinData, setCoinData] = useState();

  useEffect(() => {
    async function coinData() {
      const priceData = await fetchCoinData(data.id, 1)
      const priceHistory = priceData.prices
      setCoinData(() => {
        let prices = priceHistory.map((price, index) => { if (index % 12 == 0) { return { value: price[1].toFixed(2) } } }) // Getting the data to render it hourly.
        let priceList = prices.filter((row) => row !== undefined)
        return priceList
      })
    }

    coinData();
  }, [])


  return (
    <div className={classes.coinCard}>
      <div className={classes.coinInfo}>
        <div className={classes.infoLeft}>
          <div className={classes.coinLogo} style={{ backgroundImage: `url(${data.image})` }} />

          <p className={classes.coinName}>{data.name} </p>
        </div>

        <button><img src={arrow} alt="arrowSign" /></button>
      </div>


      <div className={classes.coinStats}>
        <div className={classes.statLeft}>
          <p className={classes.price}>{data.current_price.toLocaleString("EN-US")} $</p>
          <p style={{ color: data.price_change_percentage_24h < 0 ? '#D32F2F' : '#4CAF50' }} className={classes.exRate}>{data.price_change_percentage_24h}%</p>
        </div>

        <div className={classes.statRight}>
          <AreaChart data={coinData} width={200} height={50}>
            <Area fillOpacity={1} fill="url(#trendCard)" strokeWidth={2.5} type="monotone" activeDot={{ r: 2 }} stroke={data.price_change_percentage_24h > 0 ? '#4CAF50' : '#D32F2F'} dot={false} dataKey="value" />
            <defs>
              <linearGradient id="trendCard" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={data.price_change_percentage_24h > 0 ? '#66BB6A' : '#EF5350'} stopOpacity={0.8} />
                <stop offset="95%" stopColor={data.price_change_percentage_24h > 0 ? '#2E7D32 ' : '#C62828'} stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis width={0} style={{ fontSize: "0.7rem" }} domain={["dataMin", "dataMax"]} values='value' tick={false} axisLine={false} />
          </AreaChart>
        </div>
      </div>
    </div>
  )
}