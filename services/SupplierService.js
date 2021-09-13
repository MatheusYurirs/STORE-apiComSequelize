import SupplierRepository from "../repositories/SupplierRepository.js";

async function createSupplier(supplier) {
    return await SupplierRepository.insertSuppliere(supplier);
}

async function getSuppliers() {
    return await SupplierRepository.getSuppliers();
}

async function getSupplier(id) {
    return await SupplierRepository.getSupplier(id);
}

async function deleteSupplier(id) {
    await SupplierRepository.deleteSupplier(id);
}

async function updateSupplier(supplier) {
    return await SupplierRepository.updateSupplier(supplier);
}


export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    deleteSupplier,
    updateSupplier
}