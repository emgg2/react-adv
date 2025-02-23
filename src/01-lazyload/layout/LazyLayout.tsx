import React from 'react'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
        <h1>LasyLayout Page </h1>
        {/** rutas hijas irán aqui qie van a estar anidadas */}

        <ul>
            <li>
               <NavLink to="lazy1"> Lazy1</NavLink> 
            </li>
            <li>
               <NavLink to="lazy2"> Lazy2</NavLink> 
            </li>
            <li>
               <NavLink to="lazy3"> Lazy3</NavLink> 
            </li>
        </ul>

        <Routes>
            <Route path='lazy1' element={ <LazyPage1/>} />
            <Route path='lazy2' element={ <LazyPage2/>} />
            <Route path='lazy3' element={ <LazyPage3/>} />

            <Route path='*' element={<Navigate replace to="lazy1" />} />
        </Routes>

    </div>
  )
}

export default LazyLayout;