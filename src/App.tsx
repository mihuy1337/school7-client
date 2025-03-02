import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useInitApp } from './hooks/useInitApp'
import { AppRoutes } from './routes'

const queryClient = new QueryClient()

function App() {
  useInitApp()
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}


export default App
