import { Router } from "express";
import { signinAdmin, signoutAdmin, signupAdmin } from "../controllers/admin.controller.js";
import { createProduct, deleteProduct, updateProduct,} from '../controllers/product.controller.js'
const router = Router()

router.post("/sign-up", signupAdmin)
router.post("/sign-in", signinAdmin)
router.post("/sign-out", signoutAdmin)
router.post("/products/create", createProduct)
router.put("/products/:id/update", updateProduct)
router.delete("/products/:id/delete", deleteProduct)

export default router;