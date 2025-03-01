import { useInitApp } from './hooks/useInitApp'
import { AppRoutes } from './routes'

function App() {
  useInitApp()
  return (
    <div className=''>
      <AppRoutes />
    </div>
  )
}

export default App
