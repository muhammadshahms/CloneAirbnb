import { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'

function AccountPage() {
  const { user, ready } = useContext(UserContext)
  if (!ready) {
    return <div>loading...</div>
  }
  if (ready && !user) {
    return <Navigate to={'/login'}></Navigate>
  }
  useParams

  return (
    <div className='w-full flex justify-center mt-8 gap-2'>
      <Link className='px-4 py-2 text-sm bg-primary border rounded-full text-white' to={'/account'}>My Profile</Link>
      <Link className='px-4 py-2' to={'/account/bookings'}>Booking</Link>
      <Link className='px-4 py-2' to={'/account/places'}>accomodations</Link>
    </div>
  )
}

export default AccountPage