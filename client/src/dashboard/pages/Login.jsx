import { useState } from 'react'
import { LiaGlobeEuropeSolid } from 'react-icons/lia'

const Login = () => {
  const [loader, setLoader] = useState(false)
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const submit = async (e) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <div className='min-h-screen bg-primary-light flex items-center justify-center'>
      <div className='bg-light shadow-lg rounded-sm w-[400px]'>
        <div className='p-8'>
          <div className='flex justify-center items-center mb-8 gap-2'>
            <LiaGlobeEuropeSolid className='text-3xl' />
            <span className='logo'>World News</span>
          </div>
          <form
            className='space-y-6'
            onSubmit={submit}
          >
            {/* <div className='flex flex-col gap-y-2'>
              <label 
                htmlFor='name' 
                className='text-grey-dark uppercase text-md font-medium'
              >
                Name  
              </label>
              <input
                id='name' 
                type='text' 
                name='name'
                required
                className='input-field' 
              />
            </div> */}
            <div>
              <h1 className='font-medium uppercase text-center text-xl'> Login</h1>
            </div>
            <div className='flex flex-col gap-y-2'>
              <label 
                htmlFor='email' 
                className='text-grey-dark uppercase text-md font-medium'
              >
                Email  
              </label>
              <input
                id='email' 
                type='email' 
                name='email'
                required
                className='input-field' 
                value={state.email}
                onChange={inputHandle}
              />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label 
                htmlFor='password' 
                className='text-grey-dark uppercase text-md font-medium'
              >
                Password  
              </label>
              <input
                id='password' 
                type='password' 
                name='password'
                required
                className='input-field' 
                value={state.password}
                onChange={inputHandle}
              />
            </div>
            <div className='mt-4'>
              <button
                type='submit'
                disabled={loader}
                className={`
                  w-full px-3 py-[6px] font-medium text-light uppercase rounded-md 
                  ${loader
                    ? 'bg-grey-medium cursor-not-allowed'
                    : 'bg-grey-dark hover:bg-primary'   
                  }
                `}
              >
                {loader 
                ? 'Loading,,,'
                : 'Login'  
              }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
