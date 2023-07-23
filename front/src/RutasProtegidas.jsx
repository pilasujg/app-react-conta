import {Navigate, Outlet} from 'react-router-dom'
import { useRegistro } from './context/RegistroContext'

function RutasProtegidas() {
   const {user, isAuth } = useRegistro()

    if(!isAuth)
        return <Navigate to='/login' replace />

  return (
    <Outlet />
  )
}

export default RutasProtegidas