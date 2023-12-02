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
        mutationFn: userService.editUser,
    });
};

export const useUserById = (id: string) => {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => userService.getUserById(id),
    });
};
