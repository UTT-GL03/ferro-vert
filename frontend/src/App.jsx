import { BrowserRouter, Routes, Route } from 'react-router'

import HomePage from './pages/HomePage'
import TicketPage from './pages/TicketPage'

function App() {

  return (
    <BrowserRouter>
      <header>
        <h1>Ferro-Vert</h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket/:id" element={<TicketPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
