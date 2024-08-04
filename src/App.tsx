import ViewAllJobs from "./pages/ViewAllJobs";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<MainLayout/>}>
      <Route path="/" element={<Homepage />} />
      <Route path="/jobs" element={<ViewAllJobs />} />
      <Route path="/about" element={<div>About page</div>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
