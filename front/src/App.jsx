import { Navbar} from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Registro} from "./pages/Index"


function App() {
  return (

  
   <BrowserRouter>
    <Navbar/>
    <Routes>
   
    <Route path='/' element={<Home />} />
    <Route path='*' element={<h1>Not Found 404</h1>} />
    <Route path='/login' element={<Login />} />
    <Route path='/registro' element={<Registro />} />
  
    </Routes> 

    </BrowserRouter>
  
  
  );
}

export default App;
