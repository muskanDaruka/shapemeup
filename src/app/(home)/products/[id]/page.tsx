/* eslint-disable @next/next/no-img-element */
"use client"
import React, { FC } from "react";
import Footer from "@/components/Footer";
import { useAllProducts } from "@/hooks/products.hooks";
import { IProducts } from "@/types/products.type";
import ProductUserCard from "@/components/ProductUserCard";
import Image from "next/image";
import leftArrow from "@/images/icons/leftArrow.svg"
import Link from "next/link";

interface ProductViewProps {
    params: {
        id: string;
    };
}

const ProductsView: FC<ProductViewProps> = ({ params }) => {

    const { data: productData, isLoading, isError } = useAllProducts();
    const products = productData?.data?.data || [];

    const pageProductData = products.filter(
        (element: { _id: string }) => element._id === params.id
    );
    console.log("pageProductData", pageProductData)
    console.log("products", products)
    // if (products.length === 0) {
    //     return null;
    // }

    return (
        <div>
            <div className="w-20">
                <Link href={`/products`}>
                    <div className="flex lg:flex-row">
                        <h2 className="font-bold text-[#f2994a]  mt-5  ml-[20px] lg:text-left mb-2">
                            &lt;
                        </h2>
                        <h2 className="font-bold text-[#f2994a] mt-5 ml-2 lg:text-left mb-2">
                            Back
                        </h2>
                    </div>
                </Link>
            </div>
            <section>
                <div className="flex flex-col md:flex-row">

                    <img
                        src={pageProductData[0].imageUrl}
                        alt="product"
                        className="h-[272.037px] md:h-auto md:w-[823px] rounded-lg object-fit ml-0 sm:ml-5"
                    />

                    <div>
                        <h2 className="m-5 text-2xl font-bold">
                            {pageProductData[0].name}
                        </h2>
                        <h2 className="m-5 font-normal">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis
                            {pageProductData[0].summary}
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis
                        </h2>
                        <div className="flex flex-col md:flex-row lg:ml-5">
                            <button className="bg-[#f2994a] text-white w-full md:w-[100px] h-[40px] mb-4 md:mb-0 md:mr-4">Add to Cart</button>
                            <Link href={'/cart'}>
                                <button className="bg-[#f2994a] text-white w-full md:w-[100px] h-[40px]">Buy Now</button>

                            </Link>
                        </div>
                        <ul className="flex items-center md:justify-start justify-left gap-8 mt-5 md:mt-8 m-8">
                            <h3 className="font-normal w-12 h-8 rounded-md shadow-xl text-center md:text-left">Share</h3>
                            <li><img className="w-10 h-10 rounded-lg shadow-xl" src="/assets/images/blogs/facebook.png" alt="Facebook" /></li>
                            <li><img className="w-10 h-10 rounded-lg shadow-xl" src="/assets/images/blogs/twitter.png" alt="Twitter" /></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="md:m-10">
                <h1 className="text-black text-4xl mb-[20px] font-bold">Related products</h1>
                <div className="flex flex-col md:flex-row w-full md:ml-2 sm:container items-center justify-center text-center mx-auto ">
                    {products.map((product: IProducts, index: number) => (
                        index % 2 === 1 && index < 3 && (
                            <div key={index / 2} className="mb-4 sm:mb-0 md:flex gap-10">
                                <ProductUserCard key={product.id} product={product} />
                                {products[index + 1] && (
                                    <ProductUserCard key={products[index + 1].id} product={products[index + 1]} />
                                )}
                            </div>
                        )
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default ProductsView;
