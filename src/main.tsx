import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


const root = document.getElementById('root')!

const render = () => {
  createRoot(root).render(
    <StrictMode>

    </StrictMode>
  )
}

render()
