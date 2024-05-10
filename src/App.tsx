import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './pages/Root';
import Homepage from './pages/Homepage';
import CreatePoll from './pages/CreatePoll';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Homepage />
        },
        {
          path: '/create-poll',
          element: <CreatePoll />
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