import classes from "./featurecard.module.css"

export default function FeatureCard({feature}){
  return (
    <div className={classes.featureCard}>
      <div className={classes.featurePhoto} style={{backgroundImage: `url(${feature.bg})`}} />
      
      <div className={classes.featureInfo}>
        <p className={classes.title}>{feature.title}</p>

        <p className={classes.description}>{feature.description}</p>
      </div>

      <button>See More Details</button>
    </div>
  )
}