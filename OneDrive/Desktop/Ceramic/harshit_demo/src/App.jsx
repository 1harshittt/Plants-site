import { Router, RouterProvider } from "react-router-dom"
import "./Styles/Common.scss"
import router from "./Routes"
import { Provider } from "react-redux"
import { store } from "./Redux/store/store"
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
      <Toaster 
        position="top-right"
        toastOptions={{
          success: {
            duration: 2000,
            style: {
              background: '#4CAF50',
              color: 'white',
            },
          },
          error: {
            duration: 2000,
            style: {
              background: '#f44336',
              color: 'white',
            },
          },
        }}
      />
    </Provider>
  )
}

export default App
