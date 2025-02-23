import { useInitApp } from './hooks/useInitApp'
import { AppRoutes } from './routes'

function App() {
  useInitApp()

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
