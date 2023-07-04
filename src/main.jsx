import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import JoinSession from './pages/JoinSession/JoinSession';
import NewSession from './pages/NewSession/NewSession';
import PlanningPoker from './pages/PlanningPoker/PlanningPoker';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/JoinSession",
    element: <JoinSession />,
    errorElement: <Error />,
  },
  {
    path: "/NewSession",
    element: <NewSession />,
    errorElement: <Error />,
  },
  {
    path: "/PlanningPoker",
    element: <PlanningPoker />,
    errorElement: <Error />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
