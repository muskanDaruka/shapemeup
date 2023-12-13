"use client";

import classesService from "@/service/classes.service";
import { IClass } from "@/types/classes.type";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const useAllClasses = () => {
  return useQuery({
    queryKey: ["classes"],
    queryFn: classesService.getAllClasses,
  });
};

export const useCreateClasses = () => {
  return useMutation({
    mutationFn: classesService.createClasses,
  });
};

export const useDeleteClasses = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: classesService.deleteClasses,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["classes"],
      });
    },
  });
};

export const useUpdateClasses = (classes: IClass) => {
  return useMutation({
    mutationFn: classesService.editClasses,
  });
};

export const useClassesById = (id: string) => {
  return useQuery({
    queryKey: ["classes"],
    queryFn: () => classesService.getClassesById(id),
  });
};
