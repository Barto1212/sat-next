import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// import checkForm from './checkForm.js'
const TOKEN_SECRET_KEY = GFpPRa9G


export const login = async (req, res) => {
  const expiresIn = 60 * 60 * 24// en secondes
  const expiresOn = Date.now() + (expiresIn * 1000)
  const valid = req.body.pwd === "1234"
  if (!valid) {
    return res.status(401).json({ message : 'mot de passe incorrect' })
  }
  res.status(200).json({ 
    token: jwt.sign(
      { userid: user._id },
      TOKEN_SECRET_KEY,
      { expiresIn: '24h' }
    ),
    expiresOn: expiresOn,
  })
}

