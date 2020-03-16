import axios from 'axios'
import toast from './toast'
import router from '../router'

function errorResponseHandler (error) {
  // if has response show the error
  if (error && error.response) {
    toast.error(error.response.data.message)
    if (error.response.status === 403) {
      router.push('/login')
    }
  }
}

// apply interceptor on response
axios.interceptors.response.use(
  response => response,
  errorResponseHandler
)

export default errorResponseHandler
