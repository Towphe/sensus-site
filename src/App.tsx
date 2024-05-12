import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './pages/Root';
import Homepage from './pages/Homepage';
import CreatePoll from './pages/CreatePoll';
import ViewPoll from './pages/ViewPoll';
import AnswerPoll from './pages/AnswerPoll';

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
        },
        {
          path: '/view-poll/:pollId',
          element: <ViewPoll />
        },
        {
          path: '/answer-poll/:pollId',
          element: <AnswerPoll />
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