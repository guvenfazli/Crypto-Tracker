import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./Pages/HomePage";

/* L O A D E R S */
import { loader } from "./Pages/HomePage";

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, loader: loader }
])



function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
