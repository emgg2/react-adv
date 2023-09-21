import { BrowserRouter } from 'react-router-dom';


import logo from '../logo.svg'
import { MainMenu } from '../components/MainManu';
import { RoutesList } from './RoutesList';
import { Suspense } from 'react';



export const Navigation = () => {
    return (
     <Suspense fallback={<span>Loading....</span>} >
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <MainMenu />                     
                </nav>
               <RoutesList />
            </div>
        </BrowserRouter>
      </Suspense>
    )
}
