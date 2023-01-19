
import 'bootstrap/dist/css/bootstrap.min.css';
import NotesLists from './components/NotesLists';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/Notfound';
// setup router for react 18
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NotesLists />,
  },  
  {
    path: "*",
    element: <NotFound />,
  },

]);

function App() {
  return (
    <div className="container">
          <RouterProvider router={router} />

    </div>
  );
}

export default App;
