
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
import { IClass } from "../../../../types/classes.type"
import Link from "next/link";
import { useClassesById, useCreateClasses } from "@/hooks/classes.hooks";
import { useParams, useRouter } from "next/navigation";

const NewClassesPage = () => {
    const navigation = useRouter();
    const { id }: { id: string } = useParams();
    const { data: classesData } = useClassesById(id);
    const { mutate: addClasses } = useCreateClasses();
    const [classes, setClasses] = useState<IClass>({
        name: "",
        photoUrl: "",
        description: "",
        assignedCoach: "",
        releaseDate: null,
        type: "",
        days: null,
        duration: null,
        videoUrl: "",
        about: "",
        benefits: "",
    });

    useEffect(() => {
        console.log(classesData);
        if (classesData?.data?.data) {
            setClasses(classesData?.data?.data);
        }
    }, [classesData]);

    const editor = useBlockNote({
        onEditorContentChange: async (editor: BlockNoteEditor) => {
            // Log the document to console on every update
            const markdown: string = await editor.blocksToMarkdown(
                editor.topLevelBlocks
            );
            console.log(markdown);
            setClasses((prev) => ({
                ...prev,
                about: markdown,
            } as typeof prev));
        },
        domAttributes: {
            editor: {
                class: "bg-white h-40 border border-gray-300 overflow-scroll",
                "data-test": "editor",
            },
        },
        uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
    });

    const onHandleChange = (e: any) => {
        const {
            target: { name, value },
        } = e;
        if (name === "date") {
            // Handle the releaseDate input separately
            setClasses((prev) => ({
                ...prev,
                releaseDate: new Date(value), // Create a new Date object from the input value
            } as typeof prev));
        } else {
            // For other input fields, update state as usual
            setClasses((prev) => ({
                ...prev,
                [name]: value,
            } as typeof prev));
        }
    };

    const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (classes._id) {
                console.log("Updated")
                await updateClasses(classes);
            } else {
                await addClasses(classes);
            }
            navigation.push("/admin/classes"); // Use push instead of back to navigate to the updated page
        } catch (error) {
            console.error("Error updating classes: ", error);
        }
    };

    return (
        <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
            <div className="w-20">
                <Link href={"/admin/classes"}>
                    <Image src={leftArrow} alt="Back" width={24} height={24} />
                </Link>
            </div>
            <form onSubmit={onHandleSubmit} className="flex-1 w-full">
                <div className="flex flex-col gap-5">
                    <h5>Add new Class</h5>
                    <div className="flex items-end justify-between gap-3">
                        <div className="grid gap-2 w-full">
                            <label htmlFor="image">Upload class photo</label>
                            <input
                                type="text"
                                id="image"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="photoUrl"
                                onChange={onHandleChange}
                                value={classes.photoUrl}
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
                        <label htmlFor="name">Title</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={classes.name}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="rounded-md px-3 h-40 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={classes.description}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="assignedCoach">Assign Coach</label>
                        <input
                            type="drop-down"
                            id="assignedCoach"
                            name="assignedCoach"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={classes.assignedCoach}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="date">Release Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={classes.releaseDate}
                        />
                    </div>

                    <div className="grid gap-2 w-full">
                        <label htmlFor="type">Type</label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={classes.type}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="days">Number of Days</label>
                        <input
                            type="text"
                            id="days"
                            name="days"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={classes.days}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="duration">Duration</label>
                        <input
                            type="text"
                            id="duration"
                            name="duration"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={classes.duration}
                        />
                    </div>
                    <div className="flex items-end justify-between gap-3">
                        <div className="grid gap-2 w-full">
                            <label htmlFor="video">Add a sample video for day 1</label>
                            <input
                                type="text"
                                id="video"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="videoUrl"
                                onChange={onHandleChange}
                                value={classes.videoUrl}
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
                        >
                            {/* TODO: Plus Icon */}Browse
                        </button>
                    </div>
                    <div>
                        <label htmlFor="tags">
                            <input type="text" name="tags" id="tags" />
                        </label>
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="about">About this course</label>
                        <BlockNoteView editor={editor} theme={"light"} />
                    </div>

                    <div className="grid gap-2 w-full">
                        <label htmlFor="benefits">Benefits</label>
                        <textarea
                            id="benefits"
                            name="benefits"
                            className="rounded-md px-3 h-40 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={classes.benefits}
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
export default NewClassesPage;
