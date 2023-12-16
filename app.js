import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { redisClient } from "./src/config/redis.config.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/api", api);

const PORT = parseInt(process.env.PORT) || 4000;

