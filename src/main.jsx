import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import './assets/styles/index.css'
import App from './components/App/App'
import ExplorePartial from './Partials/Explore/Explore.partial'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'explore', element: <ExplorePartial /> }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
