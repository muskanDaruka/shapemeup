"use client";

import userService from "@/service/user.service";
import { IUser } from "@/types/user.type";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const useAllUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: userService.getAllUser,
    });
};

export const useCreateUser = () => {
    return useMutation({
        mutationFn: userService.createUser,
        onSuccess: (data) => {
            console.log("API Response data:", data);
            console.log(data);
            return data;

        },
        onError: (error) => {
            console.error("API Request failed:", error);
            throw new Error(`Error in createUser: ${error.message}`);
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: userService.deleteUser,
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ["user"],
            });
        },
    });
};

export const useUpdateUser = (user: IUser) => {
    return useMutation({
        mutationFn: (user: IUser) => userService.editUser(user),
    });
};

export const useUserById = (id: string) => {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => userService.getUserById(id),
    });
};
