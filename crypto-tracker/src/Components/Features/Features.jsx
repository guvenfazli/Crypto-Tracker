import classes from "./features.module.css"
import FeatureCard from "./FeatureCard/FeatureCard"
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