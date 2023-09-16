import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import { GlobalStyles } from './components/globalStyle.tsx'
import { ThemeProvider } from 'styled-components'
import { thems } from './components/thems.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={thems}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
)
