import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout';
import Planes from '../pages/planes';
import Blog from '../pages/Blog';
import Funciona from '../pages/Funciona';
import Preguntas from '../pages/Preguntas';





export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,

        children: [
            {
                index: true,
                element: <Planes/>
            },
            {
                path: '/preguntas-frecuentes',
                element: <Preguntas/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/como-funciona',
                element: <Funciona/>
            }

            
            
            
        
        ]

    }
]
);