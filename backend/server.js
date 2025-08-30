import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ticketRoutes from "./routes/tickets.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://support-ticket-frontend.onrender.com'
  ],
  credentials: true
}));
app.use(express.json());

app.use("/api/tickets", ticketRoutes);

app.get("/", (req, res) => {
  res.send("Support Ticket API Running ✅");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));