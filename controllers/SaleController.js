import SaleService from "../services/SaleService.js";

async function createSale(req, res, next) {
    try {
        let sale = req.body;
        if (!sale.value || !sale.date || !sale.clientId || !sale.productId) {
            throw new Error("Value, Date, client_id, product_id são obrigatórios!");
        }
        sale = await SaleService.createSale(sale);
        res.send(sale);
        logger.info(`POST /sale - ${JSON.stringify(sale)}`);
    } catch (err) {
        next(err);
    }
}

async function getSales(req, res, next) {
    try {
        res.send(await SaleService.getSales(req.query.productId, req.query.supplierId));
        logger.info("GET /sale")
    } catch (err) {
        next(err);
    }
}

async function getSale(req, res, next) {
    try {
        res.send(await SaleService.getSale(req.params.id));
        logger.info("GET /sales")
    } catch (err) {
        next(err);
    }
}

async function deleteSale(req, res, next) {
    try {
        await SaleService.deleteSale(req.params.id)
        res.end();
        logger.info("DELETE /sales")
    } catch (err) {
        next(err);
    }
}

async function updateSale(req, res, next) {
    try {
        let sale = req.body;
        if (!sale.saleId ||!sale.value || !sale.date || !sale.clientId || !sale.productId) {
            throw new Error("SaleId, Value, Date, client_id, product_id são obrigatórios!");
        }
        sale = await SaleService.updateSale(sale);
        res.send(sale);
        logger.info(`PUT /sale - ${JSON.stringify(sale)}`);

    } catch (err) {
        next(err);
    }
}

export default {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}