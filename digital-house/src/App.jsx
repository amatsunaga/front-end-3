import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { MainLayout } from "./components/MainLayout";


import { Lesson02 } from "./lessons/Lesson02"
import { Lesson03 } from "./lessons/Lesson03"
import { Lesson04 } from "./lessons/Lesson04"
import { Lesson05 } from "./lessons/Lesson05"
import { Lesson07Example } from "./lessons/Lesson07Example"
import { Lesson07Exercise } from "./lessons/Lesson07Exercise"
import { Lesson08Rejuvenescedor } from "./lessons/Lesson08Rejuvenescedor"
import { Lesson13Aula } from "./lessons/Lesson13Aula"
import { Lesson13Mesa } from "./lessons/Lesson13Mesa"
import { Lesson14 } from "./lessons/Lesson14"
import { Lesson15 } from "./lessons/Lesson15"
import { DHGames } from "./pages/DHGames"
import { Login } from "./pages/Login"

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        // {
        //   path: '',
        //   element: <Home />
        // },
        {
          path: "oitava-aula",
          element: <Lesson08Rejuvenescedor />
        },
        {
          path: 'decima-quarta-aula',
          element: <Lesson14 />
        }
      ]
    },
    {
      path: "teste",
      element: <Lesson13Mesa />,
    },
    {
      path: 'decima-quinta-aula',
      element: <Lesson15 />
    }
  ]);
  
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
