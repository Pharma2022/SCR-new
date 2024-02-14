import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FormContextProvider } from './context/formContext'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormContextProvider>
      <AuthProvider>
        <App />
     </AuthProvider>
  </FormContextProvider>,
)


