import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import {LazyAbout, LazyDashboard} from './pages'
import {App} from './components/App/App';
import { Suspense } from 'react';

const root = document.getElementById('root');


if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
      path: '/',
      element: (
          <div>
              <App />
              <br />
              <Link to="about">About Us</Link>
              <br />
              <Link to="dashboard">Dashboard</Link>
          </div>
      ),
      children: [
        {
            path: 'about',
            element: <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>,
        },
        {
            path: 'dashboard',
            element: <Suspense fallback={'Loading...'}><LazyDashboard /></Suspense>,
        }
      ]
  },
  {
      path: 'about',
      element: <div>About</div>,
  },
]);

container.render(<RouterProvider router={router} />);