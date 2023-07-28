import { Link } from 'react-router-dom'
import { useRegistro } from '../context/RegistroContext';

export const Navbar = () => {

  const { isAuth, logout, user } = useRegistro();
    return (
      <>
   <nav className="navbar navbar-expand-lg bg-body-secondary w-100">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">

            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
          <Link to={isAuth ? "/cuentas" : "/"}>Libro de Diario</Link>
           
          </li> {isAuth ? (
          <>
            <li className="text-bold text-xl">
              Welcome {user.nombre}
            </li>
            <li>
              <Link to="/diario">Add Apunte</Link>
            </li>
            <li>
              <Link to="/cuentas">Libro</Link>
            </li>
            
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registro">Register</Link>
            </li>
          </>
        )}
        </ul>

          <ul className="flex gap-x-2">
         
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><Link className="dropdown-item" to="/" onClick={() => logout()}> Logout</Link></li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
      </>
    )
  }