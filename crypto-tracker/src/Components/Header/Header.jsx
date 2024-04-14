import classes from "./header.module.css"
import { hamb } from "./headerIcons"


export default function Header() {
  return (
    <header>
      <div className={classes.headerLeft}>
        <p>Crypto<span style={{ color: "#0FAE96" }}>Cap</span></p>
      </div>

      <nav className={classes.headerMid}>
        <button>Home</button>
        <button>Business</button>
        <button>Trade</button>
        <button>Market</button>
        <button>Learn</button>
      </nav>

      <div className={classes.headerRight}>

        <button>Login</button>

        {hamb}
      </div>

    </header>
  )
}