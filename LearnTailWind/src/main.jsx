import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from './Layout';
import {
    Home,
    Projects,
    getProjectsInfo,
    About,
    Contact,
    Login,
    GetStarted,
    HandleDynamicSegment
} from './compoments/index';

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='projects' loader={getProjectsInfo} element={<Projects/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>} />
      <Route path='login/:id' element={<HandleDynamicSegment/>}/>
      <Route path='getStarted' element={<GetStarted/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
