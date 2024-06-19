import prisma from "../config/prismaconfig.js";
import bcrypt from "bcrypt";
import matchPassword from "../utils/bcrypt.js";
import jwt from "jsonwebtoken";

//user register, login and delete controller

const userRegister = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    res.send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (user) {
      if (await matchPassword(password, user.password)) {
        const token = await jwt.sign(
          {
            id: user.id,
          },
          process.env.JWT_SECRET,
          { expiresIn: "5d" }
        );
        res
          .cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
          })
          .send({
            success: true,
            message: "Login successfully",
            user,
          });
      } else {
        res.send({
          success: false,
          message: "Invalid credentials",
        });
      }
    } else {
      res.send({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await prisma.user.delete({ where: { id } });
    res.send({
      success: true,
      message: "User Deleted Successfully!!!",
      user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export { userLogin, userRegister, deleteUser };
