import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {
  RouterProvider,
} from "react-router";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './components/Context/AuthProvider.jsx';

export const UserAuthContext = createContext(null);

// const userInfo = {
//   email: "tarekrahat4@gmail.com"
// }
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UserAuthContext value={userInfo}>
    </UserAuthContext> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

  </StrictMode>
)
