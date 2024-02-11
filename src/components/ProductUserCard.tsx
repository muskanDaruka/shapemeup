/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import Link from "next/link";
interface ProductUserCardProps {
    product: {
        _id?: string;
        name: string;
        imageUrl: string;

    };
}
const ProductUserCard: FC<ProductUserCardProps> = ({ product }) => {
    // const { data: productData, isLoading, isError } = useAllproduct();
    // console.log("data", productData?.data.data)
    return (
        <div className="w-full md:w-96 h-80 rounded-md overflow-hidden mt-5">
            <div className="flex-shrink-0 w-full h-80 md-mx-10 border-slate-250 border-2 rounded-lg">
                <img
                    src={product.imageUrl}
                    alt="product_banner"
                    className="w-[500px] object-cover h-[200px] flex-shrink rounded-lg"
                />
                <h1 className="font-bold mt-6 ml-5">
                    {product.name}
                </h1>
            </div>
        </div>
    );
};

export default ProductUserCard;
