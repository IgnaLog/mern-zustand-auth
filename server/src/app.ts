import express from "express";
import config from "./config";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();

// Settings
app.set("port", config.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Routes
app.use(authRoutes);

export default app;
