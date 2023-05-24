// @desc Auth user/set token
//route POST/api
//@access Public 

const authUser = (req, res) => {
  res.status(200).json({ message: 'Auth User' })
}

export {
  authUser
}