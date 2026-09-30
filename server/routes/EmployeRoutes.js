import express from "express";
import { registerEmploye, loginEmploye } from "../controllers/employeController.js";
const EmployeRouter = express.Router();

// routes
EmployeRouter.post("/register", registerEmploye); // POST /api/employe/register
EmployeRouter.post("/login", loginEmploye); // POST /api/employe/login

export default EmployeRouter;