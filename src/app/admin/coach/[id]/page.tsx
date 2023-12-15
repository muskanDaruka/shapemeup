
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
import { ICoach } from "../../../../types/coach.type"
import Link from "next/link";
import { useCoachById, useCreateCoach, useUpdateCoach } from "@/hooks/coach.hooks";
import { useParams, useRouter } from "next/navigation";

const NewCoachPage = () => {
    const navigation = useRouter();
    const { id }: { id: string } = useParams();
    const { data: coachData } = useCoachById(id);
    const { mutate: addCoach } = useCreateCoach();
    const { mutate: updateCoach } = useUpdateCoach({} as ICoach);
    const [coach, setCoach] = useState<ICoach>({
        _id: "",
        name: "",
        photoUrl: "",
        yearsOfExp: null,
        bio: "",
        clients: null,
        certifications: null,
    });

    useEffect(() => {
        console.log(coachData);
        if (coachData?.data?.data) {
            setCoach(coachData?.data?.data);
        }
    }, [coachData]);

    const editor = useBlockNote({
        onEditorContentChange: async (editor: BlockNoteEditor) => {
            // Log the document to console on every update
            const markdown: string = await editor.blocksToMarkdown(
                editor.topLevelBlocks
            );
            console.log(markdown);
            setCoach((prev) => ({
                ...prev,
                bio: markdown,
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
        setCoach((prev) => ({
            ...prev,
            [name]: value,
        } as typeof prev));
    };

    const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (id !== "new") {
                console.log("Updated:", coach);
                await updateCoach(coach);
            } else {

                console.log("coach", coach)
                debugger;
                await addCoach(coach);

            }

            navigation.push("/admin/coach"); // Use push instead of back to navigate to the updated page
        } catch (error) {
            console.error("Error updating coach: ", error);
        }

    };

    return (
        <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
            <div className="w-20">
                <Link href={"/admin/coach"}>
                    <Image src={leftArrow} alt="Back" width={24} height={24} />
                </Link>
            </div>
            <form onSubmit={onHandleSubmit} className="flex-1 w-full">
                <div className="flex flex-col gap-5">
                    <h5>Add Coach details</h5>
                    <div className="flex items-end justify-between gap-3">
                        <div className="grid gap-2 w-full">
                            <label htmlFor="image">Upload coach photo</label>
                            <input
                                type="text"
                                id="image"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="photoUrl"
                                onChange={onHandleChange}
                                value={coach.photoUrl}
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
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={coach.name}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="bio ">Bio</label>
                        <textarea
                            id="bio"
                            name="bio"
                            className="rounded-md px-3 h-40 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={coach.bio}
                        />
                    </div>

                    <div className="grid gap-2 w-full">
                        <label htmlFor="time">Years of experience</label>
                        <input
                            type="text"
                            id="yearsOfExp"
                            name="yearsOfExp"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={coach.yearsOfExp ?? ''}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="time">Clients</label>
                        <input
                            type="text"
                            id="clients"
                            name="clients"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={coach.clients !== null ? coach.clients : ''}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="time">Certifications</label>
                        <input
                            type="text"
                            id="certifications"
                            name="certifications"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={coach.certifications !== null ? coach.certifications : ''}
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
export default NewCoachPage;
