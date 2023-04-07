import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/globals'
import { QueryClient, QueryClientProvider } from 'react-query'

const query = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
        <App />
      </QueryClientProvider>
    <GlobalStyle />
  </React.StrictMode>,
)
