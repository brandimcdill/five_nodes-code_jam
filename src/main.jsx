import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/five_nodes-code_jam/">
    <App />
    </BrowserRouter>
  </StrictMode>,
)
