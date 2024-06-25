import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import MainFrame from './Components/MainFrame';
import Result from './Components/Result';
import RootLayout from './Components/RootLayout'; 
const router = createBrowserRouter([
  {path:'/',element:<RootLayout/>,children:[
    {path:'/',element :<MainFrame/>},
    {path:'/result',element :<Result/>},
  ]}
])

function App() {
  return <RouterProvider router={router}/>
}
export default App;