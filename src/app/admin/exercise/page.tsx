"use client";
import Pagination from "@/components/Pagination";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  useAllExercise,
  useDeleteExercise,
  // useUpdateExercise,
} from "@/hooks/exercise.hooks";
import { IExercise } from "@/types/exercise.type";
import ExerciseCards from "@/components/ExerciseCards";

interface Props {
  image: string;
  title: string;
  category: string;
  time: number;
  difficulty: string;
}

const ExercisesPage = () => {
  const { data: exerciseData, isLoading, isError } = useAllExercise();
  const { mutate: deleteExercise } = useDeleteExercise();
  // const { mutate: updateExercise } = useUpdateExercise({} as IExercise);
  const exercise: IExercise[] = exerciseData?.data?.data || [];

  const onDeleteExercise = async (id: string) => {
    await deleteExercise(id);
  };
  // const onUpdateExercise = async (id: string) => {
  //   await updateExercise(id);
  // };

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <div>Error loading exercises. Please try again later.</div>;
  }
  return (
    <div className="w-full h-full bg-[#F7F8FC]">
      <div className="p-5 md:p-10 flex flex-col items-center">
        <div className="w-full flex items-center justify-between">
          <h4>Exercises</h4>
          <div className="flex items-center justify-end gap-5">
            <div>
              <input
                type="text"
                name="search"
                id="search"
                className="w-full md:w-60 h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300"
              />
              {/* TODO: Search Icon */}
            </div>
            <div>
              {/* TODO: Plus Icon */}
              <button
                type="button"
                className="bg-[#F2994A] px-4 text-white h-10 rounded-md"
              >
                <Link href={"/admin/exercise/new"}>Add New</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center justify-between gap-4 md:gap-8 lg:gap-10 my-8 ml-0">
          {Array.isArray(exercise) &&
            exercise.map((exercise) => (
              <ExerciseCards
                exercise={exercise}
                key={exercise._id}
                onDeleteExercise={onDeleteExercise}
                // onUpdateExercise={onUpdateExercise}
              />
            ))}
        </div>
        <div className="w-full flex justify-end ml-8">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;
