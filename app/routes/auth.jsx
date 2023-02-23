import AuthForm from '../components/auth/AuthForm'
import authStyles from '../styles/auth.css'
function AuthPage() {
  return (
    <AuthForm/>
  )
}

export default AuthPage

export function links() {
  return [
      { rel: 'stylesheet', href: authStyles }
    ]
}