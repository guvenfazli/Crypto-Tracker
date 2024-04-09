import { useState } from "react"
import classes from "./test.module.css"
import TestCard from "./TestCard"


const data = [
  { name: "Güven", age: 25, country: "Spain" },
  { name: "Leila", age: 22, country: "Spain" },
  { name: "Onur", age: 25, country: "Germany" },
  { name: "Furkan", age: 23, country: "Japan" },
  { name: "Fevzi", age: 22, country: "Poland" },
  { name: "Selin", age: 25, country: "Chekia" },
  { name: "Büşra", age: 25, country: "UK" },
  { name: "Berk", age: 25, country: "Belgium" },
  { name: "Altın", age: 25, country: "Netherlands" },
  { name: "Eren", age: 20, country: "USA" },
  { name: "Peri", age: 25, country: "Germany" },
  { name: "Sevval", age: 25, country: "Switzerland" }
]





export default function Test() {

  const [testState, setTestState] = useState({
    start: 0,
    end: 3
  })

  const filtered = data.slice(testState.start, testState.end)

  function testFunc(){
    setTestState((prev) => {
      let newSlice = {...prev}
      newSlice.start += 2
      newSlice.end += 2
      return newSlice
    })
  }

  function testMFunc(){
    setTestState((prev) => {
      let newSlice = {...prev}
      newSlice.start -= 2
      newSlice.end -= 2
      return newSlice
    })
  }


  return (
    <div className={classes.testDiv}>
      <button disabled={testState.start <= 0 } onClick={testMFunc}>Prev</button>

      <div className={classes.imageHolder}>
        {data.map((data, index) => <TestCard data={data} index={index} start={testState.start}/>)}
      </div>
      <button disabled={testState.end >= data.length } onClick={testFunc}>Next</button>

    </div>
  )
}