import { Router } from "express";
import {
  createMessage,
  getMessage,
  readMessage,
} from "../Controller/messageController.js";
import isSignedIn from "../middleware/userMiddleware.js";

const router = Router();

router.get("/message/get", isSignedIn, getMessage);
router.post("/message/create", createMessage);
router.put("/message/read", isSignedIn, readMessage);

export { router as messageRoute };
