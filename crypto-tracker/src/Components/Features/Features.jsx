import classes from "./features.module.css"
/* C O M P O N E N T S */
import FeatureCard from "./FeatureCard/FeatureCard"
/* U T I L S */
import { featureData } from "../../Utils/featureData"

export default function Features() {
  return (
    <div className={classes.features}>
      <div className={classes.featureInfo}>
        <p className={classes.title}>CryptoCap Amazing Features</p>
        <p className={classes.desc}>Explore sensational features to prepare your best investment in crypto world!</p>
      </div>

      <div className={classes.featureShowcase}>
        {featureData.map((feature) => <FeatureCard key={feature.title} feature={feature}/>)}
      </div>
    </div>
  )
}