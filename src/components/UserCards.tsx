/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import Image from "next/image";
import editIcon from "../images/icons/edit.svg";
import deleteIcon from "../images/icons/delete.svg";
import { IUser } from "@/types/user.type";
import Link from "next/link";

type Props = IUser & {
    onDeleteUser: (id: string) => void;
    onUpdateUser: (users: IUser) => void;
};

const UserCards: FC<Props> = ({
    _id,
    name,
    firstName,
    lastName,
    email,
    password,
    onDeleteUser,
    onUpdateUser,
}) => {
    return (
        <div className="h-14 w-full sm:h-16 bg-gray-40 m-5 z-10">
            <div className="p-5 flex space-x-[100px]">
                <p>{name = `${firstName} ${lastName}`}</p>
                <p>{email}</p>
                <p>{password}</p>
                <div className="flex gap-5 ml-[700px]">
                    <Link href={`/admin/user/${_id}`}>
                        <Image
                            src={editIcon}
                            alt="Edit"
                            width={36}
                            height={36}
                            aria-label="button"
                            role="button"
                            onClick={() => onUpdateUser}
                        />
                    </Link>
                    <Image
                        src={deleteIcon}
                        alt="Edit"
                        width={36}
                        height={36}
                        aria-label="button"
                        role="button"
                        onClick={() => onDeleteUser(_id as string)}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserCards;
