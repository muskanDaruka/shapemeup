/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import Image from "next/image";
import React, { useState } from "react";
import editIcon from "../images/icons/edit.svg";
import deleteIcon from "../images/icons/delete.svg";
import { IProducts } from "@/types/products.type";
import Link from "next/link";
import { useUpdateProducts } from "@/hooks/products.hooks";
import { useParams, useRouter } from "next/navigation";

// type Props = IProducts & {
//     onDeleteProducts: (id: string) => void;

// };

type Props = {
    _id: string;
    name: string;
    category: string;
    imageUrl: string;
    description: string;
    onDeleteProducts: (id: string) => void;
};

const ProductsCards: FC<Props> = ({
    _id,
    name,
    category,
    imageUrl,
    description,
    onDeleteProducts,
}) => {
    const navigation = useRouter();
    const { mutate: updateProducts } = useUpdateProducts({
        id: _id,
        name,
        category,
        imageUrl,
        description,
    } as IProducts);
    const handleEditClick = async () => {
        navigation.push(`/admin/products/${_id}`);
    };
    return (
        <div className="w-full md:w-[48%] rounded-md overflow-hidden">
            <div className="flex w-full flex-1 h-[185px] top-0 left-0 bg-white rounded-[10px] shadow-[0px_0px_10px_#0000001a]">
                <div className="overflow-hidden w-5/12">
                    <img
                        src={imageUrl}
                        alt={imageUrl}
                        className="bg-cover w-full h-full"
                    />
                </div>
                <div className="p-5 flex-1 flex flex-col items-start justify-between">
                    <h5 className="text-[#F2994A] text-xl font-bold">{name}</h5>

                    <h6>
                        Category: <small>{category}</small>
                    </h6>

                    <div className="flex items-center justify-start gap-5">
                        <Link href={`/admin/products/${_id}`}>
                            <Image
                                src={editIcon}
                                alt="Edit"
                                width={36}
                                height={36}
                                aria-label="button"
                                role="button"
                                onClick={handleEditClick}
                            />
                        </Link>
                        <Image
                            src={deleteIcon}
                            alt="Edit"
                            width={36}
                            height={36}
                            aria-label="button"
                            role="button"
                            onClick={() => onDeleteProducts(_id as string)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCards;
