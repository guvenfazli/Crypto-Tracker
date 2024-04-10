import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./Pages/HomePage";

/* L O A D E R S */
import { loader } from "./Pages/HomePage";

/* C O N T E X T */
import { SavedJobContext } from "./Store/context";

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, loader: loader }
])



function App() {
  return (
    <SavedJobContext>
      <RouterProvider router={router}></RouterProvider>
    </SavedJobContext>
  );
}

export default App;
