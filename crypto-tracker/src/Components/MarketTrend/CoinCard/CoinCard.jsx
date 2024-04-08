import arrow from '../../../Assets/jumpVector.png'
import classes from "./coincard.module.css"

export default function CoinCard(){
  return (
    <div className={classes.coinCard}>
      <div className={classes.coinInfo}>
        <div className={classes.infoLeft}>
          <div className={classes.coinLogo} />

          <p className={classes.coinName}>BTC </p>
          <p className={classes.fullName}>BITCOIN</p>
        </div>

        <button><img src={arrow} alt="arrow" /></button>
      </div>


      <div className={classes.coinStats}>
        <div className={classes.statLeft}>
          <p className={classes.price}>$56,623.54</p>
          <p className={classes.exRate}>1.41%</p>
        </div>
      </div>
    </div>
  )
}