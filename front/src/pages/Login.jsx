import { useForm } from 'react-hook-form';


export function Login() {
  const {register} = useForm();
  return (
    <div>
    <div className="max-w-md mx-auto p-2 rounded-md justify-center items-center">
  <p className="fs-1 text-center my-5 py-5 contabilidad-title">Contabilidad</p>
</div>

   
   <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" alt="tarea" className="img-fluid"></img>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          
          <div className="form-outline mb-4">
            <div>
            <label className="form-label fs-5" htmlFor="form3Example3">Email</label>
            </div>
            <input  
             type='email'
              {...register('email', {required: true})}
              id='form3Example3'
              className='rounded-pill px-4 py-2 text-xl w-80'
              />
          </div>
          <div>
            <label className="form-label fs-5" htmlFor="form3Example4">Password</label>
          </div>
          <div className="form-outline mb-3">
            <input type="password" 
            {...register('password', {required: true})}
            id="form3Example4"
            className='rounded-pill rounded-md px-4 py-2 my-2 text-xl w-70'
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
          
            
            <a href="#!" className="text-body">No recuerdas password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg"
             >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">No tienes Cuenta? <a href="/registro"
                className="link-danger">Registrate</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
 
</section>
<div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between mt-5 py-4 px-4 px-xl-5 bg-primary">
   
    <div className="text-white mb-5">
      Copyright © 2023. All rights reserved.
    </div>
   
  </div>
    </div>
  )
}
