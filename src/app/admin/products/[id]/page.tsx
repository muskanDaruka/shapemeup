
"use client";
import React from "react";
import Image from "next/image";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import {
    uploadToTmpFilesDotOrg_DEV_ONLY,
    BlockNoteEditor,
} from "@blocknote/core";
import leftArrow from "./../../../../images/icons/leftArrow.svg";
import "@blocknote/core/style.css";
import { FormEvent, useEffect, useState } from "react";
import { IProducts } from "../../../../types/products.type"
import Link from "next/link";
import { useProductsById, useCreateProducts } from "@/hooks/products.hooks";
import { useParams, useRouter } from "next/navigation";

const NewProductsPage = () => {
    const navigation = useRouter();
    const { id }: { id: string } = useParams();
    const { data: productsData } = useProductsById(id);
    const { mutate: addProducts } = useCreateProducts();

    const [products, setProducts] = useState<IProducts>({
        imageUrl: "",
        name: "",
        category: "",
        description: "",
      });

    useEffect(() => {
        console.log(productsData);
        if (productsData?.data?.data) {
            setProducts(productsData?.data?.data);
        }
    }, [productsData]);

    const editor = useBlockNote({
        onEditorContentChange: async (editor: BlockNoteEditor) => {
            // Log the document to console on every update
            const markdown: string = await editor.blocksToMarkdown(
                editor.topLevelBlocks
            );
            console.log(markdown);
            setProducts((prev) => ({
                ...prev,
                description: markdown,
            } as typeof prev));
        },
        domAttributes: {
            editor: {
                class: "bg-white h-40 border border-gray-300 overflow-scroll",
                "data-test": "editor",
            },
        },
        uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
    });

    const onHandleChange = (e: any) => {
        const {
            target: { name, value },
        } = e;
        setProducts((prev) => ({
            ...prev,
            [name]: value,
        } as typeof prev));
    };

    const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (products._id) {
                console.log("Updated")
                await updateProducts(products);
            } else {
                await addProducts(products);
            }
            navigation.push("/admin/products"); // Use push instead of back to navigate to the updated page
        } catch (error) {
            console.error("Error updating products: ", error);
        }
    };

    return (
        <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
            <div className="w-20">
                <Link href={"/admin/products"}>
                    <Image src={leftArrow} alt="Back" width={24} height={24} />
                </Link>
            </div>
            <form onSubmit={onHandleSubmit} className="flex-1 w-full">
                <div className="flex flex-col gap-5">
                    <h5>Add Products details</h5>
                    <div className="flex items-end justify-between gap-3">
                    <div className="grid gap-2 w-full">
                            <label htmlFor="image">Upload products image</label>
                            <input
                                type="text"
                                id="image"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="imageUrl"
                                onChange={onHandleChange}
                                value={products.imageUrl}
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
                        >
                            {/* TODO: Plus Icon */}Browse
                        </button>
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={products.name}
                        />
                    </div>

                    <div className="grid gap-2 w-full">
                        <label htmlFor="time">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={products.category}
                        />
                    </div>

                    <div className="grid gap-2 w-full">
                        <label htmlFor="bio ">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="rounded-md px-3 h-40 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={products.description}
                        />
                    </div>
    
                    <div className="w-full flex justify-end">
                        <button
                            type="submit"
                            className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default NewProductsPage;
