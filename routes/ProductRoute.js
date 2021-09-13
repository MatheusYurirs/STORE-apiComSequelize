import  express  from "express";
import ProducteController  from "../controllers/ProductController.js"


const router = express.Router();

router.post("/", ProducteController.createProduct);
router.get("/", ProducteController.getProducts);
router.get("/:id", ProducteController.getProduct);
router.delete("/:id", ProducteController.deleteProduct);
router.put("/", ProducteController.updateProduct);



export default router;