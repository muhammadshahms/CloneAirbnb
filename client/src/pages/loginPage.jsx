import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../UserContext"

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirt] = useState(false)
  const { setUser } = useContext(UserContext)
  async function login(e) {
    e.preventDefault()
    try {
      const {data} = await axios.post('/login', {
        email,
        password
      })
      setUser(data)
      alert("login success")
      setRedirt(true)
    } catch (err) {
      alert("login failed")
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="mt-4 grow flex items-center justify-around ">
      <div className="mb-64">
        <h1 className="text-4xl text-center"> Login</h1>
        <form className="max-w-md mx-auto mt-4" onSubmit={login}>
          <input type="email" placeholder={'youremail@example.com'} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            <Link to={'/register'} className="underline"> Don't have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
