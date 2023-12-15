"use client";

import coachService from "@/service/coach.service";
import { ICoach } from "@/types/coach.type";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const useAllCoach = () => {
    return useQuery({
        queryKey: ["coach"],
        queryFn: coachService.getAllCoach,
    });
};

export const useCreateCoach = () => {
    return useMutation({
        mutationFn: coachService.createCoach,
    });
};

export const useDeleteCoach = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: coachService.deleteCoach,
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ["coach"],
            });
        },
    });
};

export const useUpdateCoach = (coach: ICoach) => {
    return useMutation({
        mutationFn: coachService.editCoach,

    });
};

export const useCoachById = (id: string) => {
    return useQuery({
        queryKey: ["coach"],
        queryFn: () => coachService.getCoachById(id),
    });
};
