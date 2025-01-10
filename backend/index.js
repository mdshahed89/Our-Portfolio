import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbConnect from "./utils/dbConfig.js";
import bookingRoutes from "./routes/booking.route.js";
import availabilityRoutes from "./routes/availability.route.js";
import admin from "./routes/login.route.js";
import project from "./routes/project.route.js";
import sendEmail from "./routes/sendemail.route.js";
import blog from "./routes/blog.route.js";

const app = express();
dotenv.config();
dbConnect();
const corsOptions = {
  origin: ['https://sidesone.no', 'http://localhost:3001'],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};


app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
console.log();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Server is running",
  });
});

app.use(admin);
app.use(project);
app.use(sendEmail);
app.use(blog);
app.use("/api/book", bookingRoutes);
app.use("/api/availability", availabilityRoutes);

const PORT = process.env.PORT || 8000;

// if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
// }

export default app;
