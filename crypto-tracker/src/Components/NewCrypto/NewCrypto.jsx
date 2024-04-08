import classes from "./newcrypto.module.css"

export default function NewCrypto(){
  return (
    <div className={classes.newCrypto}>
      <div className={classes.joinCrypto}>
        <div className={classes.joinLeft}>
            <p className={classes.title}>New In Crypto World?</p>
            <p className={classes.description}>We'll tell you what crypto world is, how it works and why you should get a crypto right now. Let's start!</p>
        </div>

        <button>Learn & Explore Now</button>
      </div>
    </div>
  )
}