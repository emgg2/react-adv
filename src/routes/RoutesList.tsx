import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

export const RoutesList = () => {
  return (
    <Routes>
    {
      routes.map ( ({ to, path, Component }) => (
         <Route 
            key={ to } 
            path={ path } 
            element={ <Component /> }/>
      )

      )
    }
      
     
      
      <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
  </Routes>

  )
}
