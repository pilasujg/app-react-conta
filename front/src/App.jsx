import { Home, Registro, Login} from './pages'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import { RegistroProvider } from './context/RegistroContext'
import RutasProtegidas from './RutasProtegidas'
import { DiarioProvider } from './context/DiarioContext'
import {Navbar} from './components/Navbar'


function App() {
  return (
   
   <RegistroProvider>
    <DiarioProvider>
    <BrowserRouter>
    <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<h1>Not Found 404</h1>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/registro' element={<Registro />} />
    <Route path='/logout'  />
    <Route element= {<RutasProtegidas />} >
    <Route path='/profile'  />
    <Route path='/diario' element={<h3 >diariio</h3>} />
    <Route path='/diario/:id' element={<h3 >diariio</h3>}  />
    <Route path='/cuentas' element={<h3 >libroh</h3>} />
    
    </Route>
    </Routes>
    </BrowserRouter>
    </DiarioProvider>
    </RegistroProvider>
  
  )
}

export default App