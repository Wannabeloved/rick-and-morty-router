import { RouterProvider } from 'react-router';
import {unstable_ViewTransition as ViewTransition} from 'react';
import { router } from './router';

function App() {
  return (
      <ViewTransition>
        <RouterProvider router={router} />
      </ViewTransition>
  )
}

export default App;