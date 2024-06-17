import { Provider } from 'react-redux'
import Login from '~/pages/login'
import { store } from '~/redux/store'

const LoginPage = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

export default LoginPage
