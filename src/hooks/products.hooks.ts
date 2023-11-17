"use client";

import productsService from "@/service/products.service";
import { IProducts } from "@/types/products.type";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const useAllProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: productsService.getAllProducts,
    });
};

export const useCreateProducts = () => {
    return useMutation({
        mutationFn: productsService.createProducts,
    });
};

export const useDeleteProducts = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: productsService.deleteProducts,
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
};

export const useUpdateProducts = (products: IProducts) => {
    return useMutation({
        mutationFn: productsService.editProducts,
    });
};

export const useProductsById = (id: string) => {
    return useQuery({
        queryKey: ["products"],
        queryFn: () => productsService.getProductsById(id),
    });
};
