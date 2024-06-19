import { Router } from "express";
import isSignedIn from "../middleware/userMiddleware.js";
import {
  deleteUser,
  userLogin,
  userRegister,
} from "../Controller/userController.js";

const router = Router();

//setting up api calls
router.post("/user/register", userRegister);
router.post("/user/login", userLogin);
router.delete("/user/delete", isSignedIn, deleteUser);

export { router as userRouter };
