import classes from "./marketupdate.module.css"
import SmallChart from './SmallChart/SmallChart';

import { useState, useRef } from 'react';

export default function MarketUpdate({ data }) {
  const [details, setDetails] = useState()
  const [searchedCoin, setSearchedCoin] = useState();
  const [controlTable, setControlTable] = useState({
    start: 0,
    end: 10
  })
  const searchValue = useRef(); // Ref for searching coin.

  function searchCoins() {
    if (searchValue.current?.value.length > 0) {
      setSearchedCoin(() => {
        const chosenCoin = data.filter((coin) => coin.name.toLowerCase().includes(searchValue.current?.value.toLowerCase())) // Making include case free.
        return chosenCoin;
      })
    } else {
      setSearchedCoin(undefined)
    }
  }

  function renderDetails(coin) {
    setDetails(coin)
  }

  function navigateTable(option) {
    if (option === "+") {
      setControlTable((prev) => {
        let newPage = { ...prev }
        newPage.start += 10
        newPage.end += 10
        return newPage
      })
    } else {
      setControlTable((prev) => {
        let newPage = { ...prev }
        newPage.start -= 10
        newPage.end -= 10
        return newPage
      })
    }
  }

  const controlledData = data.map((coin, index) => {return {coin: coin, coinIndex: index}})
  const limitedData = controlledData.slice(controlTable.start, controlTable.end)
  
  return (
    <>
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

          <input ref={searchValue} onChange={searchCoins} type="text" placeholder="Search Coins..." />
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
              {searchedCoin ? searchedCoin.map((coin, index) => <tr key={coin.id}>
                <td data-cell="NO">{index + 1}</td>
                <td data-cell="NAME" className={classes.coinInfo}><div className={classes.coinBg} style={{ backgroundImage: `url(${coin.image})` }} /> {coin.name}</td>
                <td data-cell="PRICE">{coin.current_price.toFixed(1).toLocaleString("EN-US")} $</td>
                <td style={{ color: coin.price_change_percentage_24h < 0 ? "#D32F2F" : '#4CAF50' }} data-cell="CHANGE">{coin.price_change_percentage_24h.toFixed(2)} %</td>
                <td data-cell="TRADE"><button onClick={() => renderDetails(coin)}>See Details</button></td>
              </tr>)
                : limitedData.map((coin) =>
                  <tr key={coin.coin.id}>
                    <td data-cell="NO">{coin.coinIndex + 1}</td>
                    <td data-cell="NAME" className={classes.coinInfo}><div className={classes.coinBg} style={{ backgroundImage: `url(${coin.coin.image})` }} /> {coin.coin.name}</td>
                    <td data-cell="PRICE">{coin.coin.current_price.toLocaleString("EN-US")} $</td>
                    <td style={{ color: coin.coin.price_change_percentage_24h < 0 ? "#D32F2F" : '#4CAF50' }} data-cell="CHANGE">{coin.coin.price_change_percentage_24h.toFixed(2)} %</td>
                    <td data-cell="TRADE"><button onClick={() => renderDetails(coin)}>See Details</button></td>
                  </tr>
                )}
            </tbody>



          </table>

        }
      </div>
      <div style={{ display: details && "none" }} className={classes.navigators}>
        <button disabled={controlTable.start <= 0} onClick={() => navigateTable("-")}>Previous</button>
        <button disabled={controlTable.end >= data.length} onClick={() => navigateTable("+")}>Next</button>
      </div>
    </>
  )
}