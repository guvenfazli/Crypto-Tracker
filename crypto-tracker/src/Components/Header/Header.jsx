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
        <select>
          <option>EN</option>
          <option>ES</option>
          <option>DE</option>
          <option>FR</option>
          <option>TR</option>
        </select>

        <button>Login</button>

        {hamb}
      </div>

    </header>
  )
}