import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PATHS } from './paths';
import Workshop from '../components/page/Workshop';
import About from "../components/page/About";
import Home from "../components/page/Home";
import Login from "../components/page/Login";
import SignUp from "../components/page/SignUp";
// import Share from "../page/Share";
import Layout from "./Layout";
import GuestGuard from "../auth/GuestGuard";
import AuthGuard from "../auth/AuthGuard";
import Story from "../components/page/Story";
import PrivateArea from "../section/child/PrivateArea";
import Share from '../components/page/Share';

export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home />
      }, 
      {
        path: PATHS.about,
        element: <About />
      },
      {
        path: PATHS.workshop,
        element: <Workshop/>
      },
      {
        path: PATHS.share,
        element: <Share />
      },
      {
        path: PATHS.story,
        element: <Story />
      },
      {
        path: PATHS.privateArea,
        element: <PrivateArea />
      },
      {
        path: '*',
        element: <Navigate to={PATHS.home} />,
      },
    ]
  },
  {
    path: '',
    element: <Navigate to={PATHS.home} />
  },
  {
    path: PATHS.login,
    element: <GuestGuard><Login /></GuestGuard>
  },
  {
    path: PATHS.signup,
    element: <GuestGuard><SignUp /></GuestGuard>
  },

])




// const Navigation = () => (
//   <nav>
//     <ul>
//       <li><Link to={PATHS.home}>Home</Link></li>
//       <li><Link to={PATHS.login}>Login</Link></li>
//       <li><Link to={PATHS.activity}>Activity</Link></li>
//       <li><Link to={PATHS.about}>About</Link></li>
//       <li><Link to={PATHS.share}>Share</Link></li>
//     </ul>
//   </nav>
// );

// const AppRoutes = () => (
//   <Router>
//       <Navigation />
//       <Routes>
//         <Route path={PATHS.home} element={<Home />} />
//         <Route path={PATHS.login} element={<Login />} />
//         <Route path={PATHS.activity} element={<Activity />} />
//         <Route path={PATHS.about} element={<About />} />
//         <Route path={PATHS.share} element={<Share />} />
//       </Routes>
//   </Router>
// );


// export default AppRoutes;
