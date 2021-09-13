import  express  from "express";
import SuppliereController  from "../controllers/SupplierController.js"


const router = express.Router();

router.post("/", SuppliereController.createSupplier);
router.get("/", SuppliereController.getSuppliers);
router.get("/:id", SuppliereController.getSupplier);
router.delete("/:id", SuppliereController.deleteSupplier);
router.put("/", SuppliereController.updateSupplier);



export default router;