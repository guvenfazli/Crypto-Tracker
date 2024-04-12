import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';
import classes from "./smallchart.module.css"
/* U T I L S */
import { fetchCoinData } from '../../../Utils/fetchCoins';
import { useEffect, useState } from 'react';

import { backArrow } from './smallcharticon';

import Loading from '../../UI/loading';

export default function SmallChart({ data, detail }) {

  const [coinData, setCoinData] = useState();
  const [loading, setLoading] = useState(true);
  const [checkButton, setCheckButton] = useState({
    1: true,
  })

  useEffect(() => {
    async function coinData() {
      setLoading(true)
      const priceData = await fetchCoinData(data.id, 1)
      setLoading(false)
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
    setLoading(true)
    const priceData = await fetchCoinData(data.id, dayNumber)
    setLoading(false)
    const priceHistory = priceData.prices
    setCheckButton((prev) => {
      let checking = { [dayNumber]: prev.dayNumber === true ? false : true }
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
            <p>{data.price_change_percentage_24h}</p>
          </div>

        </div>

      </div>

      <div className={classes.tableTitle} >Price Change in Daily Graphics</div>

      <div className={classes.chartController}>
        <button disabled={checkButton[1]} onClick={() => controlChartDate(1)}>1 D</button>
        <button disabled={checkButton[3]} onClick={() => controlChartDate(3)}>3 D</button>
        <button disabled={checkButton[7]} onClick={() => controlChartDate(7)}>7 D</button>
        <button disabled={checkButton[15]} onClick={() => controlChartDate(15)}>15 D</button>
        <button disabled={checkButton[30]} onClick={() => controlChartDate(30)}>30 D</button>
      </div>

      {loading ? <Loading /> :
        <ResponsiveContainer width="100%" height={500} >
          <AreaChart data={coinData} margin={{ right: 25 }} >
            <Area fillOpacity={1} fill="url(#colorvalue)" strokeWidth={2.5} type="monotone" activeDot={{ r: 2 }} stroke={data.price_change_24h > 0 ? '#4CAF50' : '#D32F2F'} dot={false} dataKey="value" />
            <defs>
              <linearGradient id="colorvalue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={data.price_change_percentage_24h > 0 ? '#66BB6A' : '#EF5350'} stopOpacity={0.8} />
                <stop offset="95%" stopColor={data.price_change_percentage_24h > 0 ? '#2E7D32 ' : '#C62828'} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis tick={true} values='value' style={{ fontSize: "0.7rem" }} angle={-45} />
            <Tooltip itemStyle={{ color: "black" }} contentStyle={{ backgroundColor: "rgb(255,255,255,0.3)", border: "none", borderRadius: "1rem" }} labelStyle={{ display: 'none' }} />
            <YAxis style={{ fontSize: "0.7rem", }} angle={-25} domain={["dataMin", "dataMax"]} values='value' />
            <CartesianGrid stroke='#555773' strokeDasharray="5 5" />
          </AreaChart>
        </ResponsiveContainer>
      }

    </div>
  )
}