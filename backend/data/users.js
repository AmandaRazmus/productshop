import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user', 
    email: 'frscoblnk182@gmail.com',
    password: '123456', 
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users

