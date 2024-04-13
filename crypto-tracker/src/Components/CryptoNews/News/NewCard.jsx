/* I M P O R T S */
import classes from "./newcard.module.css"
import { Link } from "react-router-dom"


export default function NewCard({ newData, page }) {

  return (

    <div style={{ translate: `${page * -100}%` }} className={classes.newCard}> {/* Moving the news to the direction based on page. */}
      <div className={classes.cardInfo}>
        <div className={classes.newBg} style={{ backgroundImage: `url(${newData.images.thumbnailProxied})` }} />
        <p className={classes.title}>{newData.title}</p>
        <p className={classes.description}>{newData.snippet}</p>
        <Link target="_blank" to={newData.newsUrl}>More Details...</Link>
      </div>
    </div>

  )
}