import classes from "./howtogetstarted.module.css"
/* C O M P O N E N T S */
import Guide from "./Guide/Guide"
/* D A T A */
import { howToGetStarted } from "../../Utils/HowToGetStartedData"
export default function HowToGetStarted(){
  return (
    <div className={classes.howToStart}>
      <div className={classes.getStarted}>
        <p className={classes.title}>How To Get Started</p>
        <p className={classes.description}>Simple and easy way to start your investment <br /> in crypto world!</p>
        <button>Get Started</button>
      </div>

      <div className={classes.startingGuide}>
        {howToGetStarted.map((guide) => <Guide key={guide.title} guide={guide}/>)}


      </div>
    </div>
  )
}