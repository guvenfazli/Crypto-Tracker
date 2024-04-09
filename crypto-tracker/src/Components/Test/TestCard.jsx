import classes from "./test.module.css"

export default function TestCard({ data, index, start }) {


  return (
      <div style={{translate: `${-100 * start}%`}} className={classes.card}>
        <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.country}</p>
      </div>
  )
}