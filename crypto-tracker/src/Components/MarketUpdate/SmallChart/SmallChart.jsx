import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, domain, Label, Tooltip } from 'recharts';
import classes from "./smallchart.module.css"
/* U T I L S */
import { fetchCoinData } from '../../../Utils/fetchCoins';
import { useEffect, useState, useRef } from 'react';

import { backArrow } from './smallcharticon';

export default function SmallChart({ data, detail }) {

  const [coinData, setCoinData] = useState();
  const [checkButton, setCheckButton] = useState({
    1: true,
    3: false,
    7: false,
    15: false,
    30: false

  })

  useEffect(() => {
    async function coinData() {
      const priceData = await fetchCoinData(data.id, 1)
      const priceHistory = priceData.prices
      setCoinData(() => {
        let prices = priceHistory.map((price, index) => { if (index % 12 == 0) { return { value: price[1].toFixed(2) } } })
        let priceList = prices.filter((row) => row !== undefined)
        return priceList
      })
    }

    coinData();
  }, [])

  async function controlChartDate(dayNumber) {
    const priceData = await fetchCoinData(data.id, dayNumber)
    const priceHistory = priceData.prices
    setCheckButton((prev) => {
      let checking = {[dayNumber]: prev.dayNumber === true ? false : true}
      return checking
    })

    if (dayNumber === 1) {
      setCoinData(() => {
        let prices = priceHistory.map((price, index) => { if (index % 12 == 0) { return { value: price[1].toFixed(2) } } })
        let priceList = prices.filter((row) => row !== undefined)
        return priceList
      })
    } else {
      setCoinData(() => {
        let prices = priceHistory.map((price, index) => { if (index % 1 == 0) { return { value: price[1].toFixed(2) } } })
        let priceList = prices.filter((row) => row !== undefined)
        return priceList
      })
    }
  }


  function goBack() {
    detail(undefined)
  }


  return (
    <div className={classes.details}>
      <div className={classes.detailNav}>
        <button onClick={goBack}>{backArrow}</button>

      </div>
      <div className={classes.coinInfo}>

        <div className={classes.coinIcon} style={{ backgroundImage: `url(${data.image})` }} />
        <div className={classes.coinStats}>
          <div>
            <p className={classes.title}>{data.name}</p>
            <p>Current Price: <span style={{ color: "#B6B6B6" }}>{data.current_price.toFixed(2)} $</span></p>
            <p>Price Change as Percentage in 24h: <span style={{ color: data.price_change_percentage_24h < 0 ? '#D32F2F' : '#4CAF50', fontWeight: "bold" }}>{data.price_change_percentage_24h.toFixed(1)} %</span></p>
            <p>Price Change in 24h: <span style={{ color: data.price_change_24h < 0 ? '#D32F2F' : '#4CAF50', fontWeight: "bold" }}>{data.price_change_24h.toFixed(1)} $</span></p>

          </div>

          <div>
            <p>All Time High: <span style={{ color: "#B6B6B6" }}>{data.ath} $</span></p>
            <p>All Time Low: <span style={{ color: "#B6B6B6" }}>{data.atl} $</span></p>
            <p>Highest in 24h: <span style={{ color: "#B6B6B6" }}>{data.high_24h} $</span></p>
            <p>Lowest in 24h: <span style={{ color: "#B6B6B6" }}>{data.low_24h} $</span></p>
          </div>

        </div>

      </div>

      <div className={classes.tableTitle} >Price Change in 24h in Graphics</div>

      <div className={classes.chartController}>
        <button disabled={checkButton[1]} onClick={() => controlChartDate(1)}>1 D</button>
        <button disabled={checkButton[3]} onClick={() => controlChartDate(3)}>3 D</button>
        <button disabled={checkButton[7]} onClick={() => controlChartDate(7)}>7 D</button>
        <button disabled={checkButton[15]} onClick={() => controlChartDate(15)}>15 D</button>
        <button disabled={checkButton[30]} onClick={() => controlChartDate(30)}>30 D</button>
      </div>


      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={coinData} margin={{ right: 25 }} >
          <Line strokeWidth={2.5} type="monotone" activeDot={{ r: 2 }} stroke={data.price_change_24h > 0 ? '#4CAF50' : '#D32F2F'} dot={false} dataKey="value" />
          <XAxis tick={true} values='value' style={{ fontSize: "0.7rem", }} />
          <Tooltip itemStyle={{ color: "black" }} contentStyle={{ backgroundColor: "rgb(255,255,255,0.3)", border: "none", borderRadius: "1rem" }} labelStyle={{ display: 'none' }} />
          <YAxis style={{ fontSize: "0.7rem", }} domain={["dataMin", "dataMax"]} values='value' />
          <CartesianGrid stroke='#555773' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}