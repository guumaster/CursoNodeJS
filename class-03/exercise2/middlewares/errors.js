
module.exports = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.message || 'Something broke');
};
