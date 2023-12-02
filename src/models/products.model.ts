import { IProducts } from "@/types/products.type";
import { Schema, model, models } from "mongoose";

type ProductsType = IProducts & Document;

export const productsSchema = new Schema<ProductsType>({
    name: String,
    category: String,
    imageUrl: String,
    description: String,
});

const Products = models?.products ?? model<ProductsType>("products", productsSchema);

export default Products;
