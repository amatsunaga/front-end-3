import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MainLayout } from './components/MainLayout'
import { Lesson02 } from './lessons/Lesson02'
import { Lesson03 } from './lessons/Lesson03'
import { Lesson04 } from './lessons/Lesson04'
import { Lesson05 } from './lessons/Lesson05'
import { Lesson07Example } from './lessons/Lesson07Example'
import { Lesson07Exercise } from './lessons/Lesson07Exercise'
import { Lesson08Rejuvenescedor } from './lessons/Lesson08Rejuvenescedor'
import { Lesson13Aula } from './lessons/Lesson13Aula'
import { Lesson13Mesa } from './lessons/Lesson13Mesa'
import { Lesson14 } from './lessons/Lesson14'
import { Lesson15 } from './lessons/Lesson15'
import { ThemeProvider } from './hooks/useTheme'
import { DHGames } from './pages/DHGames'
import { Login } from './pages/Login'
import { Configurations } from './pages/Configurations'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: 'primeira-aula',
          element: <Login />
        },
        {
          path: 'segunda-aula',
          element: <Lesson02 />
        },
        {
          path: 'terceira-aula',
          element: <Lesson03 />
        },
        {
          path: 'quarta-aula',
          element: <Lesson04 />
        },
        {
          path: 'quinta-aula',
          element: <Lesson05 />
        },
        {
          path: 'dh-games',
          element: <DHGames />
        },
        {
          path: 'setima-aula/1',
          element: <Lesson07Example />
        },
        {
          path: 'setima-aula/2',
          element: <Lesson07Exercise />
        },
        {
          path: 'oitava-aula',
          element: <Lesson08Rejuvenescedor />
        },
        {
          path: 'decima-terceira-aula/1',
          element: <Lesson13Aula />
        },
        {
          path: 'decima-terceira-aula/2',
          element: <Lesson13Mesa />
        },
        {
          path: 'decima-quarta-aula',
          element: <Lesson14 />
        },
        {
          path: 'decima-quinta-aula',
          element: <Lesson15 />
        },
        {
          path: 'configuracoes',
          element: <Configurations />
        }
        // {
        //   path: 'decima-quinta-aula/:id',
        //   element: <Lesson15 />
        // }
      ],
      // {
      //   path: "checkpoint1",
      //   element: <Checkpoint1 />,
      // },
    }
  ])

  return (

    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>

  )

}

export default App
