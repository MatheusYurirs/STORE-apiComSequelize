import  express  from "express";
import ClienteController  from "../controllers/ClientController.js"


const router = express.Router();

router.post("/", ClienteController.createClient);
router.get("/", ClienteController.getClients);
router.get("/:id", ClienteController.getClient);
router.delete("/:id", ClienteController.deleteClient);
router.put("/", ClienteController.updateClient);



export default router;