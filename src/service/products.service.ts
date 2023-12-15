"use client";

import { IProducts } from "@/types/products.type";
import axios from "axios";

class ProductsService {
    /**
     * Get All posts
     * @retutn
     */
    async getAllProducts() {
        console.log("Hello")
        return await axios.get("/api/products");

    }

    /**
     * Create a products
     * @return
     */
    async createProducts(productsData: IProducts) {
        return await axios.post("/api/products", productsData);
    }

    /**
     * Delete a products
     * @param id: string
     */
    async deleteProducts(id: string) {
        return await axios.delete(`/api/products?id=${id}`);
    }

    /**
     * Edit the products by id
     * @param products IProducts
     */
    async editProducts(products: IProducts) {
        return await axios.put(`/api/products`, products);
    }

    /**
     * Get products by id
     * @param id string
     */
    async getProductsById(id: string) {
        return await axios.get(`/api/products?id=${id}`);
    }
}

const productsService = new ProductsService();

export default productsService;
