import express from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/userRoute.js";
import { messageRoute } from "./routes/messageRoute.js";

//dotenv configuration
config();

const app = express();

//cors policy
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-rho-snowy-20.vercel.app",
      "https://madhukunwar.com.np",
    ],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//setting up route
app.use("/api/v1", userRouter);
app.use("/api/v1", messageRoute);

const PORT = process.env.PORT || 3000;

//listening port
app.listen(PORT, () => {
  console.log(`sever is running on port ${PORT}`);
});
