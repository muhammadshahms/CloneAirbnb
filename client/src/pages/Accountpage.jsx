import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'

function AccountPage() {
  const { user, ready, setUser } = useContext(UserContext)
  const [redirect, setRedirect] = useState(null)
  if (!ready) {
    return <div>loading...</div>
  }
  if (ready && !user && !redirect) {
    return <Navigate to={'/login'}></Navigate>
  }
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }
  console.log(subpage);
  async function logout() {
    await axios.get('/logout')
    setRedirect("/")
    setUser(null)
  }
  if (redirect) {
    return <Navigate to={redirect} />
  }

  function linkClasses(type = null) {
    let classes = "px-4 py-2 hover:bg-primary hover:text-white rounded-full";
    if (type === subpage) {
      classes += "text-sm bg-primary text-white rounded-full"
    }
    return classes
  }

  return (
    <div className='max-w-lg mx-auto pr-12'>
      <nav className='w-full flex flex-row justify-center mt-8 gap-2 text-gray-500'>
        <Link className={linkClasses('profile')} to={'/account'}>My Profile</Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>Booking</Link>
        <Link className={linkClasses('places')} to={'/account/places'}>accommodations</Link>
      </nav>
      {subpage === 'profile' && (
        <div className='mt-4 w-full flex flex-col items-center'>
          Profile {user.name} ({user.email})
          <button className='primary mt-2 mb-4 max-w-sm' onClick={logout}>
            Log out
          </button>
        </div>

      )}
    </div>
  )
}
export default AccountPage