module.exports = function isAdminCheck(req, res, next) {
  if (req.isAdmin) {
    next();
  } else {
    res.redirect('/');
  }
};
