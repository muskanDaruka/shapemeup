"use client";

import exerciseService from "@/service/exercise.sevice";
import { IExercise } from "@/types/exercise.type";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const useAllExercise = () => {
  return useQuery({
    queryKey: ["exercise"],
    queryFn: exerciseService.getAllExercise,
  });
};

export const useCreateExercise = () => {
  return useMutation({
    mutationFn: exerciseService.createExercise,
  });
};

export const useDeleteExercise = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: exerciseService.deleteExercise,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["exercise"],
      });
    },
  });
};

export const useUpdateExercise = (exercise: IExercise) => {
  return useMutation({
    mutationFn: exerciseService.editExercise,
  });
};

export const useExerciseById = (id: string) => {
  return useQuery({
    queryKey: ["exercise"],
    queryFn: () => exerciseService.getExerciseById(id),
  });
};