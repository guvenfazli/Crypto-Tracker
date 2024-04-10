import classes from "./loading.module.css"

export default function Loading() {
  return (
    <div className={classes.loadingScreen}>
      <span className={classes.loader}></span>
    </div>
  )
}