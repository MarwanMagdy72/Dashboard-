import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import BarChart from './Pages/BarChart/BarChart';
import Calendar from './Pages/Calendar/Calendar';
import Contacts from './Pages/Contacts/Contacts';
import Faq from './Pages/Faq/Faq';
import Form from './Pages/Form/Form';
import Geography from './Pages/Geography/Geography';
import Invoices from './Pages/Invoices/Invoices';
import LineChart from './Pages/LineChart/LineChart';
import RedialChart from './Pages/RedialChart/RedialChart';
import Team from './Pages/Team/Team';
import NotFound from './Pages/NotFound/NotFound';


export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children:[
        {index:true ,element: <Dashboard />},
        {path:'barChart' , element:<BarChart/>},
        {path:'calendar' , element:<Calendar/>},
        {path:'contacts' , element:<Contacts/>},
        {path:'faq' , element:<Faq/>},
        {path:'form' , element:<Form/>},
        {path:'geography' , element:<Geography/>},
        {path:'invoices' , element:<Invoices/>},
        {path:'lineChart' , element:<LineChart/>},
        {path:'redialChart' , element:<RedialChart/>},
        {path:'team' , element:<Team/>},
        {path:'*' , element:<NotFound/>},

      ]
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

