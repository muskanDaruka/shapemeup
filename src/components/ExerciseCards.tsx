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

type Props = IExercise & {

    onDeleteExercise: (id: string) => void;
};

const ExerciseCards: FC<Props> = ({
    imageUrl,
    name,
    category,
    time,
    difficulty,
    _id,

    onDeleteExercise,
}) => {
    const { mutate: updateExercise } = useUpdateExercise();
    const handleEditClick = async () => {
        await updateExercise(_id as string);
    }
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

                    <h5>{name}</h5>


                    <h6>
                        Category: <small>{category}</small>
                    </h6>
                    <h6>
                        Time: <small>{time}</small>
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
