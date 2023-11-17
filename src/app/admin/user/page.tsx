"use client"
import Pagination from "@/components/Pagination";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAllUser, useDeleteUser, useUpdateUser} from "@/hooks/user.hooks";
import { IUser } from "@/types/user.type";
import UserCards from "@/components/UserCards";


interface Props {
    name: string;
    email: string;
    password: string;
}


const UserPage = () => {
      const { data: userData, isLoading, isError } = useAllUser();
      const { mutate: deleteUser } = useDeleteUser();
      const {mutate: updateUser} = useUpdateUser();
      const user: IUser[] = userData?.data?.data || []  ;

      const onDeleteUser = async (id: string) => {
        await deleteUser(id);

      };
      const onUpdateUser = async (id: string) => {
        await updateUser(id);

      };

    return (
        <div className="w-full h-full bg-[#F7F8FC]">
            <div className="p-5 md:p-10 flex flex-col items-center">
                <div className="w-full flex items-center justify-between">
                    <h4>Users</h4>
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
                                <Link href={"/admin/user/new"}>Add New user</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <section className="h-14 w-full sm:h-16 bg-gray-50 m-5 z-10">
                    <div className="flex flex-row items-center justify-between sm:justify-center h-14 sm:h-16">
                        <div className="h-full  bg-[#EFF0F6] w-full text-black box-content">
                            <ul className="p-5 flex space-x-[200px] items-center">
                                <li> Name </li>
                                <li> Email </li>
                                <li> Password </li>
                            </ul>
                        {Array.isArray(user) && user.map((user) => (
                            <UserCards {...user} key={user._id} onDeleteUser={onDeleteUser} onUpdateUser={onUpdateUser}/>
                        ))}
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-end">
                    <div className="mt-[700px]">
                        <Pagination />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UserPage;    
