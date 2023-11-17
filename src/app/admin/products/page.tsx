"use client"
import Pagination from "@/components/Pagination";
import React,{useState, useEffect} from "react";
import Link from "next/link";
import { useAllProducts, useDeleteProducts, useUpdateProducts} from "@/hooks/products.hooks";
import { IProducts} from "@/types/products.type";
import ProductsCards from "@/components/ProductsCards";


interface Props { 
    name: String,
    category: String,
    imageUrl: String,
    description: String,
}

const ProductsPage = () => {
  const { data: productsData, isLoading, isError } = useAllProducts();
  const { mutate: deleteProducts } = useDeleteProducts();
  const {mutate: updateProducts} = useUpdateProducts();
  const products: IProducts[] = productsData?.data?.data || []  ;
 
  const onDeleteProducts = async (id: string) => {
    await deleteProducts(id);
    
  };
  const onUpdateProducts = async (products: IProducts) => {
    await updateProducts(products);
    
  };
  
  if (isLoading) return <div>Loading...</div>;
  
    return (
        <div className="w-full h-full bg-[#F7F8FC]">
            <div className="p-5 md:p-10 flex flex-col items-center">
                <div className="w-full flex items-center justify-between">
                    <h4>Products</h4>
                    <div className="flex items-center justify-end gap-5">
                        <div>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className="w-full md:w-60 h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300"
                            />
                            {/* TODO: Search Icon */}
                        </div>
                        <div>
                            {/* TODO: Plus Icon */}
                            <button
                                type="button"
                                className="bg-[#F2994A] px-4 text-white h-10 rounded-md"
                            >
                                <Link href={"/admin/coach/new"}>Add New</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row flex-wrap items-center justify-between gap-y-5 md:gap-y-14 my-8">
                    {Array.isArray(products) && products.map((products) => (
                        <ProductsCards {...products} key={products._id} onDeleteProducts={onDeleteProducts} onUpdateProducts={onUpdateProducts}/>
                    ))}
                </div>
                <div className="w-full flex justify-end">
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;    
