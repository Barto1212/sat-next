import jwt from 'jsonwebtoken'


export default function(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
    const decodedUserId =  decodedToken.userid
    if (req.body.userid && req.body.userid !== decodedUserId) {
      throw 'Utilisateur non authorisé'
    } else {
      next()
    }
  } catch (error) {
    res.status(401).json({ error: error | 'Requête non authentifiée' })
  }
};