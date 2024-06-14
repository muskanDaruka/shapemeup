
"use client";
import React from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import leftArrow from "./../../../../images/icons/leftArrow.svg";
import { FormEvent, useEffect, useState } from "react";
import { IClass } from "../../../../types/classes.type"
import Link from "next/link";
import { useClassesById, useCreateClasses, useUpdateClasses } from "@/hooks/classes.hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

const NewClassesPage = () => {
    const navigation = useRouter();
    const { id }: { id: string } = useParams();
    const { data: classData } = useClassesById(id);
    const { mutate: addClasses } = useCreateClasses();
    const { mutate: updateClasses } = useUpdateClasses({} as IClass);
    const [classes, setClasses] = useState<IClass>({
        _id: "",
        name: "",
        photoUrl: "",
        description: "",
        assignedCoach: "",
        releaseDate: undefined,
        type: "",
        days: null,
        duration: null,
        videoUrl: "",
        about: "",
        benefits: "",
        durationType: "",
        videos: []
    } as IClass);

    useEffect(() => {
        console.log(classData);
        if (classData?.data?.data) {
            setClasses(classData?.data?.data);
        }
    }, [classData]);

    useEffect(() => {
        console.log(classData);
        if (classData?.data?.data) {
            const { releaseDate, ...rest } = classData.data.data;
            // Convert releaseDate to Date object if it exists
            const formattedReleaseDate = releaseDate ? new Date(releaseDate) : null;
            setClasses(prev => ({
                ...prev,
                ...rest,
                releaseDate: formattedReleaseDate
            }));
        }
    }, [classData]);

    const handleAboutEditorChange = (value: string) => {
        setClasses((prev) => ({ ...prev, about: value }));
    };
    const handleBenefitsEditorChange = (value: string) => {
        setClasses((prev) => ({ ...prev, benefits: value }));
    };
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image", "video"],
        ],
    }
    const onHandleChange = (e: any) => {
        const {
            target: { name, value },
        } = e;
        if (name === "date") {
            setClasses((prev) => ({
                ...prev,
                releaseDate: value ? new Date(value) : null, // Create a new Date object from the input value
            } as typeof prev));
        } else {
            setClasses((prev) => ({
                ...prev,
                [name]: value,
            } as typeof prev));
        }
    };
    const onFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        const target = e.target as HTMLTextAreaElement;
        if (e.key === 'Enter' && target.tagName.toLowerCase() !== 'textarea') {
            e.preventDefault();
        }
    };
    const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (id !== "new") {
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
    const handleBrowseClick = (fieldName: keyof typeof classes) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*,.jpg,.jpeg,.png,.gif,.bmp,.svg', 'video/*'; // Accept only image files
        input.onchange = (e) => {
            const target = e.target as HTMLInputElement;
            if (target.files && target.files.length > 0) {
                const file = target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    if (reader.result) {
                        setClasses((prev) => ({
                            ...prev,
                            [fieldName]: reader.result as string,
                        } as typeof prev));
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    };

    return (
        <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
            <div className="w-20">
                <Link href={"/admin/classes"}>
                    <Image src={leftArrow} alt="Back" width={24} height={24} />
                </Link>
            </div>
            <form onSubmit={onHandleSubmit} onKeyDown={onFormKeyDown} className="flex-1 w-full">
                <div className="flex flex-col gap-5">
                    <h5 className="font-bold">Add new Class</h5>
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
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
                            onClick={() => handleBrowseClick('photoUrl')}
                        >
                            +Browse
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
                            required
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
                            required
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
                            required
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="date">Release Date</label>
                        <input
                            type="date"
                            id="date"
                            name="releaseDate"
                            required
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={classes.releaseDate instanceof Date ? classes.releaseDate.toISOString().split('T')[0] : ''}
                        />
                    </div>

                    <div className="grid gap-2 w-full">
                        <label htmlFor="type">Type</label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            required
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
                            required
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={classes && classes.days !== null && classes.days !== undefined ? classes.days.toString() : ''}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="duration">Duration</label>
                        <input
                            type="text"
                            id="duration"
                            name="duration"
                            required
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={classes.duration !== null && classes.duration !== undefined ? classes.duration.toString() : ''}
                        />
                    </div>
                    <div className="flex items-end justify-between gap-3">
                        <div className="grid gap-2 w-full">
                            <label htmlFor="video">Add a sample video for day 1</label>
                            <input
                                type="text"
                                id="video"
                                required
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="videoUrl"
                                onChange={onHandleChange}
                                value={classes.videoUrl}
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
                            onClick={() => handleBrowseClick('videoUrl')}
                        >
                            +Browse
                        </button>
                    </div>
                    <div className="grid gap-2 w-full" aria-required >
                        <label htmlFor="About">About</label>
                        <ReactQuill
                            theme="snow"
                            id="about"
                            value={classes.about}
                            onChange={handleAboutEditorChange}
                            modules={modules}
                        />
                    </div>
                    <div className="grid gap-2 w-full mt-8" aria-required >
                        <label htmlFor="benefits">Benefits</label>
                        <ReactQuill
                            theme="snow"
                            id="benefits"
                            value={classes.benefits}
                            onChange={handleBenefitsEditorChange}
                            modules={modules}
                        />
                    </div>
                    <div className="w-full flex justify-end mt-8">
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
