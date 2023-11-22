import { Link } from "react-router-dom"

const LoginPage = () => {
  return (

    <div className="mt-4 grow flex items-center justify-around ">
      <div className="mb-64">
      <h1 className="text-4xl text-center"> Login</h1>
      <form className="max-w-md mx-auto mt-4">
        <input type="email" placeholder={'youremail@example.com'}/>
        <input type="password" placeholder={'password'}/>
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
