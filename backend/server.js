import express from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/userRoute.js";
import { messageRoute } from "./routes/messageRoute.js";

config();
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-rho-snowy-20.vercel.app",
    ],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", userRouter);
app.use("/api/v1", messageRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`sever is running on port ${PORT}`);
});
