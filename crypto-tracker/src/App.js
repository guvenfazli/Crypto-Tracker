import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./Pages/HomePage";


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> }
])



function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
