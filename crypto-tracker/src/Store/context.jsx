import { createContext, useState } from "react";

const SaveContext = createContext({
  coinData: [],
  setCoinData: () => { },
})

export function SavedJobContext({ children }) {
  const [coinData, setCoinData] = useState()

  const saveContext = {
    coinData: coinData,
    setCoinData: setCoinData,
  }

  return <SaveContext.Provider value={saveContext}>{children}</SaveContext.Provider>
}

export default SaveContext