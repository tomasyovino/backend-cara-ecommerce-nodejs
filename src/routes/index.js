import { Router } from "express";
import userRouter from "./user.js";
import productRouter from "./product.js";
import cartRouter from "./cart.js";
import orderRouter from "./order.js";
import authRouter from "./auth.js";

const router = Router();

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/cart", cartRouter);
router.use("/order", orderRouter);
router.use("/auth", authRouter);

export default router;