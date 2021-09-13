import express from "express";
import cors from "cors";
import winston from "winston";
import clientsRouter from "./routes/ClientRoute.js";
import ProductRouter from "./routes/ProductRoute.js";
import SupplierRouter from "./routes/SupplierRoute.js";
import SaleRouter from "./routes/SaleRoute.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "store-api.log" })
    ],
    format: combine(
        label({ label: "store-api.log" }),
        timestamp(),
        myFormat
    )
});


const app = express();
app.use(express.json());
app.use(cors());
app.use("/client", clientsRouter);
app.use("/product", ProductRouter);
app.use("/supplier", SupplierRouter);
app.use("/sale", SaleRouter);
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
});
app.listen(3000, () => { console.log("API STARTED"); })

/*
  if(err.message){
        logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
        res.status(400).send({ error: err.message });
    } else{
        logger.error(`${req.method} ${req.baseUrl} - ${err}`);
        res.status(400).send({ error: err.message });
    }
*/