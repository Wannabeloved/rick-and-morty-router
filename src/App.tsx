import { RouterProvider } from 'react-router';
import { router } from './pages';

function App() {
  return (   
    <RouterProvider router={router} />  
  )
}

export default App;