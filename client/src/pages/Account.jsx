import { useContext } from 'react'
import { UserContext } from '../UserContext'

function Account() {  
  const { user } = useContext(UserContext)
  return (
    <div>Account {user.name}</div>
  )
}

export default Account