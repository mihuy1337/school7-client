import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useInitApp } from './hooks/useInitApp'
import { AppRoutes } from './routes'
import WebApp from '@twa-dev/sdk'
import { EnumTokens, removeFromStorage } from './services/storage.service'

const queryClient = new QueryClient()

function App() {
  useInitApp()
  WebApp.SettingsButton.show()
  WebApp.SettingsButton.onClick(() => {removeFromStorage(EnumTokens.ACCESS_TOKEN); removeFromStorage(EnumTokens.REFRESH_TOKEN)})
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}


export default App
