// import { Jwt } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');

      next();
    } catch (e) {
      res.status(401);
      throw new Error('Token inválido')
    }

  } else {
    res.status(401);
    throw new Error('Token não autorizado')
  }
});

export { protect }