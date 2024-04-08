import classes from "./marketupdate.module.css"

export default function MarketUpdate(){
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

        <input type="text" placeholder="Search Coins..."/>
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
          <tr>
            <td>1</td>
            <td className={classes.coinInfo}><div className={classes.coinBg}/> BITCOIN</td>
            <td>50K</td>
            <td>5%</td>
            <td>GOOD</td>
            <td>TRADE</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}