/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import Image from "next/image";
import React, { useState } from "react";
import editIcon from "../images/icons/edit.svg";
import deleteIcon from "../images/icons/delete.svg";
import { IExercise } from "@/types/exercise.type";
import Link from "next/link";
import { useUpdateExercise } from "@/hooks/exercise.hooks";
import { useParams, useRouter } from "next/navigation";

type Props = {
  onDeleteExercise: (id: string) => void;
  exercise: IExercise;
};

const ExerciseCards: FC<Props> = ({ exercise, onDeleteExercise }) => {
  const navigation = useRouter();
  const { imageUrl, name, category, time, durationType, difficulty, _id } = exercise;
  const { mutate: updateExercise } = useUpdateExercise(exercise);

  const handleEditClick = async () => {
    // await updateExercise(exercise);
    navigation.push(`/admin/exercise/${_id}`);
  };
  return (
    <div className="w-full md:w-[48%] rounded-md overflow-hidden">
      <div className="flex w-full flex-1 h-[200px] top-0 left-0 bg-white rounded-[10px] shadow-[0px_0px_10px_#0000001a]">
        <div className="overflow-hidden w-5/12">
          <img
            src={imageUrl}
            alt={imageUrl}
            className="bg-cover w-full h-full"
          />
        </div>
        <div className="p-2 flex-1 flex flex-col items-start justify-evenly">
          <h5 className="text-[#F2994A] text-xl font-bold">{name}</h5>

          <h6>
            Category: <small>{category}</small>
          </h6>
          <h6>
            Time: <small>{time} {durationType}</small>
          </h6>
          <h6>
            Difficulty: <small>{difficulty}</small>
          </h6>

          <div className="flex items-center justify-start gap-5">
            <Link href={`/admin/exercise/${_id}`}>
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
              alt="delete"
              width={36}
              height={36}
              aria-label="button"
              role="button"
              onClick={() => onDeleteExercise(_id as string)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCards;
