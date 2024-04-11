import classes from "./newcard.module.css"


export default function NewCard({ newData, page }) {
  return (
    <div style={{translate: `${page * -109}%`}}  className={classes.newCard}>
      <div className={classes.newBg} style={{backgroundImage: `url(${newData.images.thumbnailProxied})`}} />
      <p className={classes.title}>{newData.title}</p>
      <p className={classes.description}>{newData.snippet}</p>
    </div>
  )
}