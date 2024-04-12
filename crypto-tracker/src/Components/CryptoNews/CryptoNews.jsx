import classes from "./cryptonews.module.css"

import NewCard from "./News/NewCard"
import { useState } from "react"


export default function CryptoNews({ news }) {

  const [page, setPage] = useState(0)

  function controlPage(control) {
    if (control === "+") {

      setPage((prev) => {
        if (prev < news.items.length) {
          prev += 1
          return prev
        } else if (news.items.length - 2) {
          prev = 0
          return prev
        }
      }
      )
    } else {
      setPage((prev) => prev -= 1)
    }
  }


  return (
    <div className={classes.news}>
      <div className={classes.newShowcase}>
        {news.items.map((data) => <NewCard key={data.title} newData={data} page={page} />)}
      </div>
      <div className={classes.newsNav}>
        <button disabled={page === 0} onClick={() => controlPage("-")}>Previous</button>
        <button onClick={() => controlPage("+")}>Next</button>
      </div>
    </div>
  )
}