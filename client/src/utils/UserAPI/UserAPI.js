import axios from 'axios'

const UserAPI = {
  getAllUsers: () => axios.get('/api/jobs'),
  addUser: ( contact ) => axios.post('/api/user', contact)
}

export default UserAPI