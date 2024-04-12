import classes from "./cryptonews.module.css"

import NewCard from "./News/NewCard"
import { useState } from "react"


export default function CryptoNews({ news }) {

  const [page, setPage] = useState(0)

  function controlPage(control) {
    if (control === "+") {
      setPage((prev) => prev += 1)
    } else {
      setPage((prev) => prev -= 1)
    }
  }


  return (
    <div className={classes.news}>
      <div className={classes.newShowcase}>
        {news.items.map((data) => <NewCard key={data.timestamp} newData={data} page={page} />)}
      </div>
      <div className={classes.newsNav}>
        <button disabled={page === 0} onClick={() => controlPage("-")}>Previous</button>
        <button disabled={page >= news.items.length - 1 } onClick={() => controlPage("+")}>Next</button>
      </div>
    </div>
  )
}