import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

import './style.scss'

export function MainLayout() {
  const aulas = [
    {
      name: 'Primeira Aula',
      value: 'primeira-aula'
    },
    {
      name: 'Segunda Aula',
      value: 'segunda-aula'
    },
    {
      name: 'Terceira Aula',
      value: 'terceira-aula'
    },
    {
      name: 'Quarta Aula',
      value: 'quarta-aula'
    },
    {
      name: 'Quinta Aula',
      value: 'quinta-aula'
    },
    {
      name: 'DH Games',
      value: 'dh-games'
    },
    {
      id: 1,
      name: 'Sétima Aula',
      value: 'setima-aula'
    },
    {
      id: 2,
      name: 'Sétima Aula',
      value: 'setima-aula'
    },
    {
      name: 'Oitava Aula',
      value: 'oitava-aula'
    },
    {
      id: 1,
      name: 'Décima Terceira Aula',
      value: 'decima-terceira-aula'
    },
    {
      id: 2,
      name: 'Décima Terceira Aula',
      value: 'decima-terceira-aula'
    },
    {
      name: 'Décima Quarta Aula',
      value: 'decima-quarta-aula'
    },
    {
      name: 'Décima Quinta Aula',
      value: 'decima-quinta-aula'
    },
    {
      name: 'Configurações',
      value: 'configuracoes'
    }
  ]

  // const items = [
  //   { id: 1, name: 'Reportagem 1' },
  //   { id: 2, name: 'Reportagem 2' }
  // ]

  const { theme } = useTheme()

  return (
    <div className={`main-layout-component ${theme}`}>
      <header className="main-layout-component-header">
        <h1>Layout Principal</h1>
      </header>

      <aside className="main-layout-component-aside">
        <section>
          <h2>Aulas</h2>

          <ul>
            {aulas.map((aula, index) => {
              if (aula.id) {
                return (
                  <li key={index}>
                    <Link to={`${aula.value}/${aula.id}`}>
                      {aula.name} {aula.id}
                    </Link>
                  </li>
                )
              }

              return (
                <li key={index}>
                  <Link to={`${aula.value}`}>{aula.name}</Link>
                </li>
              )
            })}
          </ul>
        </section>

        <section>
          <h2>Telas</h2>

          <ul></ul>
        </section>
      </aside>

      {/* {items.map(item => (
          <Link to={`decima-quinta-aula/${item.id}`}>{item.name}</Link>
        ))} */}

      <main className="main-layout-component-main">
        <p>O componente será carregado aqui dentro:</p>

        <Outlet />
      </main>
    </div>
  )
}
