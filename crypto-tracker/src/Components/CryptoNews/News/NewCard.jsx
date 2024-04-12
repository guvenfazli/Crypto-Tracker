import classes from "./newcard.module.css"


export default function NewCard({ newData, page }) {




  return (

    <div style={{ translate: `${page * -100}%` }} className={classes.newCard}>
      <div className={classes.cardInfo}>
        <div className={classes.newBg} style={{ backgroundImage: `url(${newData.images.thumbnailProxied})` }} />
        <p className={classes.title}>{newData.title}</p>
        <p className={classes.description}>{newData.snippet}</p>

      </div>
    </div>

  )
}