"use client";
import React from "react";
import Image from "next/image";
import leftArrow from "./../../../../images/icons/leftArrow.svg";
import { FormEvent, useEffect, useState } from "react";
import { IUser } from "../../../../types/user.type"
import Link from "next/link";
import { useUserById, useCreateUser } from "@/hooks/user.hooks";
import { useParams, useRouter } from "next/navigation";

const NewUserPage = () => {
    const navigation = useRouter();
    const { id }: { id: string } = useParams();
    const { data: userData } = useUserById(id);
    const { mutate: addUser } = useCreateUser();
    const [user, setUser] = useState<IUser>({
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        console.log(userData);
        if (userData?.data?.data) {
            setUser(userData?.data?.data);
        }
    }, [userData]);


    const onHandleChange = (e: any) => {
        const {
            target: { name, value },
        } = e;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        } as typeof prev));
    };

    const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (user._id) {
                console.log("Updated")
                await updateUser(user);
            } else {
                await addUser(user);
            }
            navigation.push("/admin/user");
        } catch (error) {
            console.error("Error updating user: ", error);
        }
    };

    return (
        <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
            <div className="w-20">
                <Link href={"/admin/user"}>
                    <Image src={leftArrow} alt="Back" width={24} height={24} />
                </Link>
            </div>
            <form onSubmit={onHandleSubmit} className="flex-1 w-full">
                <div className="flex flex-col gap-5">
                    <h5>Add New User</h5>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="firstName">First name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={user.firstName}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="lastName">Last name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={user.lastName}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="email">Email ID</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={user.email}
                        />
                    </div>
                    <div className="grid gap-2 w-full flex">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={user.password}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="confirmPassword">External links</label>
                        <input
                            type="text"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={user.confirmPassword}
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
export default NewUserPage;
