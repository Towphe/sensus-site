import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './pages/Root';
import Homepage from './pages/Homepage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Homepage />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;