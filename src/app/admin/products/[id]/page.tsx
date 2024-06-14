
"use client";
import React from "react";
import Image from "next/image";
import leftArrow from "./../../../../images/icons/leftArrow.svg";
import { FormEvent, useEffect, useState } from "react";
import { IProducts } from "../../../../types/products.type"
import Link from "next/link";
import { useProductsById, useCreateProducts, useUpdateProducts } from "@/hooks/products.hooks";
import { useParams, useRouter } from "next/navigation";

const NewProductsPage = () => {
    const navigation = useRouter();
    const { id }: { id: string } = useParams();
    const { data: productsData } = useProductsById(id);
    const { mutate: addProducts } = useCreateProducts();
    const { mutate: updateProducts } = useUpdateProducts({} as IProducts);
    const [products, setProducts] = useState<IProducts>({
        _id: "",
        imageUrl: "",
        name: "",
        category: "",
        description: ""
    } as IProducts);

    useEffect(() => {
        console.log(productsData);
        if (productsData?.data?.data) {
            setProducts(productsData?.data?.data);
        }
    }, [productsData]);


    const onHandleChange = (e: any) => {
        const {
            target: { name, value },
        } = e;
        setProducts((prev) => ({
            ...prev,
            [name]: value,
        } as typeof prev));
    };

    const onFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        const target = e.target as HTMLTextAreaElement;
        if (e.key === 'Enter' && target.tagName.toLowerCase() !== 'textarea') {
            e.preventDefault();
        }
    };

    const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (id !== "new") {
                console.log("Updated:", products)
                await updateProducts(products);
            } else {
                await addProducts(products);
            }
            navigation.push("/admin/products"); // Use push instead of back to navigate to the updated page
        } catch (error) {
            console.error("Error updating products: ", error);
        }

    };
    const handleBrowseClick = (fieldName: keyof typeof products) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*,.jpg,.jpeg,.png,.gif,.bmp,.svg', 'video/*'; // Accept only image files
        input.onchange = (e) => {
            const target = e.target as HTMLInputElement;
            if (target.files && target.files.length > 0) {
                const file = target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    if (reader.result) {
                        setProducts((prev) => ({
                            ...prev,
                            [fieldName]: reader.result as string,
                        } as typeof prev));
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    };

    return (
        <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
            <div className="w-20">
                <Link href={"/admin/products"}>
                    <Image src={leftArrow} alt="Back" width={24} height={24} />
                </Link>
            </div>
            <form onSubmit={onHandleSubmit} onKeyDown={onFormKeyDown} className="flex-1 w-full">
                <div className="flex flex-col gap-5">
                    <h5 className="font-bold">Add Products details</h5>
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
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
                            onClick={() => handleBrowseClick('imageUrl')}
                        >
                            +Browse
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
                            required
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
                            required
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
                            required
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
