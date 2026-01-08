import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Service } from './pages/Service';
import { Technology } from './pages/Technology';
import { Industries } from './pages/Industries';
import { CaseStudies } from './pages/CaseStudies';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { Resources } from './pages/Resources';
import { Company } from './pages/Company';
import { Industry } from './pages/Industry';
import { Blog } from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import { ContactUs } from './pages/ContactUs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/contact-us',
          element: <ContactUs />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/services/:serviceId',
          element: <Service />
        },
        {
          path: '/technologies/:techId',
          element: <Technology />
        },
        {
          path: '/industries',
          element: <Industries />
        },
        {
          path: '/industries/:industryId',
          element: <Industry />
        },
        {
          path: '/casestudies',
          element: <CaseStudies />
        },
        {
          path: '/casestudies/:slug',
          element: <CaseStudyDetail />
        },
        {
          path: '/company',
          element: <Company />
        },
        {
          path: '/resources',
          element: <Resources />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/blog/:slug',
          element: <BlogDetail />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
