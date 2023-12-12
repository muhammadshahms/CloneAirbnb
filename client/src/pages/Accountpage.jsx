import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PlacesPage from './PlacesPage'

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
    let classes = "px-4 py-2 font-bold inline-flex gap-2 hover:bg-primary hover:text-white rounded-full";
    if (type === subpage) {
      classes += "text-sm bg-primary text-white rounded-full"
    }
    return classes
  }

  return (
    <div>
      <div className='max-w-6xl mx-auto mb-4'>
        <nav className='w-full flex flex-row justify-center mt-8 gap-2 text-gray-500'>
          <Link className={linkClasses('profile')} to={'/account'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            My&nbsp;Profile
          </Link>

          <Link className={linkClasses('bookings')} to={'/account/bookings'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
            My&nbsp;Booking
          </Link>

          <Link className={linkClasses('places')} to={'/account/places'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
            My&nbsp;accommodation
          </Link>
        </nav>
      </div>

      {subpage === 'profile' && (
        <div className='mt-4 w-full flex flex-col items-center'>
          Profile {user.name} ({user.email})
          <button className='primary mt-2 mb-4 max-w-sm' onClick={logout}>
            Log out
          </button>
        </div>
      )}
      {subpage === 'bookings' && (
        <div>bookings</div>
      )}
      {subpage === 'places' && (
        <div><PlacesPage /></div>
      )}
    </div>
  )
}
export default AccountPage