import React from 'react'
import App from './App'
import { store, RootState } from './redux/store';
import { Provider, useSelector } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/globals'
import { QueryClient, QueryClientProvider } from 'react-query'

const query = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={query}>
        <App />
      </QueryClientProvider>
    </Provider>
    <GlobalStyle />
  </React.StrictMode>,
)
