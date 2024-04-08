import classes from "./guide.module.css"
export default function Guide({guide}){
  return (
    <div className={classes.guide}>
      <div className={classes.guidePhoto} style={{backgroundImage: `url(${guide.bg})`}}/>
      <div>
        <p className={classes.title}>{guide.title}</p>
        <p className={classes.description}>{guide.description}</p>
      </div>
    </div>
  )
}