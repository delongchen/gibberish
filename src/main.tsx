import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ChakraProvider } from '@/components/ui/provider'

import { App } from './App'


const root = document.getElementById('root')!

const render = async () => {
  createRoot(root).render(
    <StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StrictMode>
  )
}

render().catch(console.error)
