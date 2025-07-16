import express from "express";
import {
  addProduct,
  deleteProduct,
  editProduct,
  readAllProducts,
  readProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/product", addProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", editProduct);
router.get("/product/:id", readProduct);
router.get("/product", readAllProducts);

export default router