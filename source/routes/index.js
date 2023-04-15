import { requestIp } from "../controllers/index.js";
import { Router } from "express";

const router = Router();

router.get('/', requestIp);

export { router };