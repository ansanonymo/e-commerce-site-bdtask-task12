import { RouterProvider } from "react-router-dom";
import { allRoute } from "./rotues/Routes";

function App() {
  return <RouterProvider router={allRoute} />;
}

export default App;
