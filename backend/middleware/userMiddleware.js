import jwt from "jsonwebtoken";
import prisma from "../config/prismaconfig.js";

const isSignedIn = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log(token)
    const { id } = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(id)
    const user = await prisma.user.findUnique({ where: { id } });
    req.user = user;
    next();
  } catch (error) {
    res.send({
      success: false,
      message: error.message
    });
  }
};

export default isSignedIn;
