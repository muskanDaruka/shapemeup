"use client";
import React from "react";
import Image from "next/image";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import {
    uploadToTmpFilesDotOrg_DEV_ONLY,
    BlockNoteEditor,
} from "@blocknote/core";

import leftArrow from "./../../../../images/icons/leftArrow.svg";
import "@blocknote/core/style.css";
import { FormEvent, useEffect, useState } from "react";
import { IExercise } from "../../../../types/exercise.type"
import Link from "next/link";
import { useExerciseById, useCreateExercise } from "@/hooks/exercise.hooks";
import { useParams, useRouter } from "next/navigation";

const NewExercisePage = () => {
    const navigation = useRouter();
    const { id }: { id: string } = useParams();
    const { data: exerciseData } = useExerciseById(id);
    const { mutate: addExercise} = useCreateExercise();
   
    const [exercise, setExercise] = useState<IExercise>({
        name: "",
        category: "",
        time: 0,
        durationType: "",
        difficulty: "",
        imageUrl: "",
        videoUrl: "",
        description: "",
        instructions: "",
        externalLinks: "",
      });

      useEffect(() => {   
        console.log(exerciseData);
        if (exerciseData?.data?.data) {
            setExercise(exerciseData?.data?.data);
        }
    }, [exerciseData]); 

    const editor = useBlockNote({
        onEditorContentChange: async (editor: BlockNoteEditor) => {
            // Log the document to console on every update
            const markdown: string = await editor.blocksToMarkdown(
                editor.topLevelBlocks
            );
            console.log(markdown);
            setExercise((prev) => ({
                ...prev,
                instructions: markdown,
            }as typeof prev));
        },
        domAttributes: {
            editor: {
                class: "bg-white h-40 border border-gray-300 overflow-scroll",
                "data-test": "editor",
            },
        },
        uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
    });
    
    
    
    const onHandleChange = (e:any) => {
        const {
            target: { name, value },
        } = e;
        setExercise((prev) => ({
            ...prev,
            [name]: value,
        }as typeof prev));
    };

    const onHandleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (exercise._id) {
                console.log("Updated")
                await updateExercise(exercise);
            } else {
                await addExercise(exercise);
            }
            navigation.push("/admin/exercise"); // Use push instead of back to navigate to the updated page
        } catch (error) {
            console.error("Error updating exercise: ", error);
        }
    };

    return (
        <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
            <div className="w-20">
                <Link href={"/admin/exercise"}>
                    <Image src={leftArrow} alt="Back" width={24} height={24} />
                </Link>
            </div>
            <form onSubmit={onHandleSubmit} className="flex-1 w-full">
                <div className="flex flex-col gap-5">
                    <h5>Add New Exercise</h5>
                    <div className="flex items-end justify-between gap-3">
                        <div className="grid gap-2 w-full">
                            <label htmlFor="image">Upload exercise video</label>
                            <input
                                type="text"
                                id="video"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="videoUrl"
                                onChange={onHandleChange}
                                value={exercise.videoUrl}
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
                        >
                            {/* TODO: Plus Icon */}Browse
                        </button>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                        <div className="grid gap-2 w-full">
                            <label htmlFor="image">Upload exercise image</label>
                            <input
                                type="text"
                                id="image"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="imageUrl"
                                onChange={onHandleChange}
                                value={exercise.imageUrl}
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
                        >
                            {/* TODO: Plus Icon */}Browse
                        </button>
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="name">Exercise title</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={exercise.name}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="summary">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="rounded-md px-3 h-40 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={exercise.description}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={exercise.category}
                        />
                    </div>
                    <div className="flex items-end justify-between gap-3">
                        <div className="grid gap-2 w-full">
                        <label htmlFor="time">time</label>
                        <input
                            type="text"
                            id="time"
                            name="time"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={exercise.time}
                        />
                        </div>
                        <button
                            type="button"
                            className="text-black bg-white px-3 py-2 rounded-md border border-gray-300"
                        >
                            {/* TODO: Plus Icon */}Minutes/hours
                        </button>
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="category">Difficulty</label>
                        <input
                            type="text"
                            id="difficulty"
                            name="difficulty"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={exercise.difficulty}
                        />
                    </div>
                    <div>
                        <label htmlFor="tags">
                            <input type="text" name="tags" id="tags" />
                        </label>
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="contents">Instructions</label>
                        <BlockNoteView editor={editor} theme={"light"} />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="category">External links</label>
                        <input
                            type="text"
                            id="externalLinks"
                            name="externalLinks"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={exercise.externalLinks}
                        />
                    </div>
                    <div className="w-full flex justify-end">
                        <button
                            type="submit"
                            className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default NewExercisePage;
