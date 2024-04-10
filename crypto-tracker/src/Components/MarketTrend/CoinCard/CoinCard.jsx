import arrow from '../../../Assets/jumpVector.png'
import classes from "./coincard.module.css"

export default function CoinCard({data}){
  return (
    <div className={classes.coinCard}>
      <div className={classes.coinInfo}>
        <div className={classes.infoLeft}>
          <div className={classes.coinLogo} style={{backgroundImage: `url(${data.image})`}}/>

          <p className={classes.coinName}>{data.name} </p>
          <p className={classes.fullName}>{data.id}</p>
        </div>

        <button><img src={arrow} alt="arrow" /></button>
      </div>


      <div className={classes.coinStats}>
        <div className={classes.statLeft}>
          <p className={classes.price}>{data.current_price} $</p>
          <p style={{color: data.price_change_percentage_24h < 0 ? '#D32F2F' : '#4CAF50'}} className={classes.exRate}>{data.price_change_percentage_24h}%</p>
        </div>
      </div>
    </div>
  )
}