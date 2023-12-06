import jwt from 'jsonwebtoken';

const generateToken = (id) => { 
  return jwt.sign({id}, process.env.JWT_SECRET, { //signs the user id with the secret key
    expiresIn: '30d'
  })
}

export default generateToken;