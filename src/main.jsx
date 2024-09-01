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
    path: "/sign_in",
    element: <LoginPage />
  },
  {
    path: "/sign_up",
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
