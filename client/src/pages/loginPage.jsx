const LoginPage = () => {
  return (

    <div className="mt-4">
      <h1 className="text-4xl text-center"> Login</h1>
      <form className="max-w-md mx-auto mt-4">
        <input type="email" placeholder={'youremail@example.com'}/>
        <input type="password" placeholder={'password'}/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
