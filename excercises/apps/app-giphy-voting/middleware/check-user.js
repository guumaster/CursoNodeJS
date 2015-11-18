const checkUser = function(req, res, next) {

   if(!req.headers['x-user-id']) {
     return res.status(401).send('Not authorized user');
   }

   return next();
}

module.exports = checkUser;
