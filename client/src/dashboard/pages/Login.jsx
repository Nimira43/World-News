console.log("LOGIN COMPONENT LOADED")

import { useContext, useState } from 'react'
import { LiaGlobeEuropeSolid } from 'react-icons/lia'
import { base_url } from '../../config/config'
import axios from 'axios'
import toast from 'react-hot-toast'
import storeContext from '../../context/storeContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false)
  const { dispatch } = useContext(storeContext)
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
    try {
      const { data } = await axios.post(`${base_url}/api/login`, state)
      setLoader(false)
      localStorage.setItem('newsToken', data.token)
      toast.success(data.message)
      dispatch({
        type: 'login_success',
        payload: {
          token: data.token
        }
      })
      navigate('/dashboard')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
    }
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
