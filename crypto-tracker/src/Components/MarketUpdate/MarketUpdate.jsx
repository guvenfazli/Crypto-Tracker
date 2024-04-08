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
            <td data-cell="NO">1</td>
            <td data-cell="NAME" className={classes.coinInfo}><div className={classes.coinBg}/> BITCOIN</td>
            <td data-cell="LAST PRICE">50K</td>
            <td data-cell="CHANGE">5%</td>
            <td data-cell="MARKET STATS">GOOD</td>
            <td data-cell="TRADE">TRADE</td>
          </tr>

          <tr>
            <td data-cell="NO">1</td>
            <td data-cell="NAME" className={classes.coinInfo}><div className={classes.coinBg}/> BITCOIN</td>
            <td data-cell="LAST PRICE">50K</td>
            <td data-cell="CHANGE">5%</td>
            <td data-cell="MARKET STATS">GOOD</td>
            <td data-cell="TRADE">TRADE</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}