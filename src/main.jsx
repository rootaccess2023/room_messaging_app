import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage, LoginPage, RoomPage, SignupPage } from './pages'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/room",
    element: <RoomPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={router}
  />
)
