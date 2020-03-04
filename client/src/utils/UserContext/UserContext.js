import { createContext } from 'react'

const UserContext = createContext({
  namee: '',
  email: '',
  phone: '',
  comment: '',
  handleInputChange: () => { },
  handleAddUser: () => { }
})

export default UserContext