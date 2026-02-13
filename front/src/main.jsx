
import { createRoot } from 'react-dom/client'
import { AuthProvider } from "./context/AuthContext"; 

import App from './app.jsx'

createRoot(document.getElementById('root')).render(
     <AuthProvider>
         <App />
     </AuthProvider>

)
