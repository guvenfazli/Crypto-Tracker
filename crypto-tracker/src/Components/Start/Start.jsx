import classes from "./start.module.css"

export default function Start(){
  return (
    <div className={classes.start}>
      <p className={classes.title}>Start and Build Your Crypto Portfolio Here</p>
      <p className={classes.desc}>Only at CryptoCap, you can build a good portfolio and learn <br /> best practices about crypto currency.</p>
      <button>Get Started</button>
    </div>
  )
}