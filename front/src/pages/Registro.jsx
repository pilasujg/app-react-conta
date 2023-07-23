import { useForm } from 'react-hook-form';

export function Registro() {
const {register} = useForm();

  return (
    <div>
        <section className="vh-100">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-99">
      <p className='fs-3 text-center'>Registrate para poder empezar a utilizar el programa de Contabilidad</p>
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black border-radius: 25px;">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registro</p>

                <form className="mx-1 mx-md-4">
                <div>
                <label className="px-4 form-label fs-5" htmlFor='name'>Tu Nombre</label>
                </div>    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input 
                      type='text'
                      {...register('name', {required: true})}
                        id='name'
                      className='rounded-pill px-4 py-2 text-xl w-80'
                      />
                      
                    </div>
                  </div>
                  <div>
            <label className="px-4 form-label fs-5" htmlFor='email'>Email</label>
            </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input
                    type='text'
                      {...register('email', {required: true})}
                        id='email'
                     className='rounded-pill px-4 py-2 text-xl w-80'
                      />
                    </div>
                  </div>
                  <div>
                  <label className="px-4 form-label fs-5" htmlFor='password'>Password</label>
                    </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input 
                      type='password'
                      {...register('password', {required: true})}
                      id='password'
                      className='rounded-pill px-4 py-2 text-xl w-80'
                      />
                      
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Guardar</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample"></img>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

