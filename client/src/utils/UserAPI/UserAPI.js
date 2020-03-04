import axios from 'axios'

const UserAPI = {
  getAllUsers: () => axios.get('/api/jobs'),
  addUser: ( contact ) => axios.post('/api/users', contact)
}

export default UserAPI