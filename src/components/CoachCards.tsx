/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import Image from "next/image";
import React, { useState } from "react";
import editIcon from "../images/icons/edit.svg";
import deleteIcon from "../images/icons/delete.svg";
import { ICoach } from "@/types/coach.type";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useUpdateCoach } from "@/hooks/coach.hooks";

type Props = ICoach & {
  onDeleteCoach: (id: string) => void;
};
const CoachCards: FC<Props> = ({
  photoUrl,
  name,
  clients,
  yearsOfExp,
  certifications,
  bio,
  _id,
  onDeleteCoach,
}) => {
  const navigation = useRouter();
  const { mutate: updateCoach } = useUpdateCoach({
    photoUrl,
    name,
    clients,
    yearsOfExp,
    certifications,
    bio,
    _id,
  });
  const handleEditClick = async () => {
    navigation.push(`/admin/coach/${_id}`);
  };
  return (
    <div className="w-full md:w-[48%] rounded-md overflow-hidden">
      <div className="flex w-full flex-1 h-[185px] top-0 left-0 bg-white rounded-[10px] shadow-[0px_0px_10px_#0000001a]">
        <div className="overflow-hidden w-5/12">
          <img
            src={photoUrl}
            alt={photoUrl}
            className="bg-cover w-full h-full"
          />
        </div>
        <div className="p-5 flex-1 flex flex-col items-start justify-between">
          <h5>{name}</h5>

          <h6>
            Clients: <small>{clients}</small>
          </h6>
          <h6>
            Years of experience: <small>{yearsOfExp}</small>
          </h6>
          <h6>
            Certifications: <small>{certifications}</small>
          </h6>

          <div className="flex items-center justify-start gap-5">
            <Link href={`/admin/coach/${_id}`}>
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
              alt="Edit"
              width={36}
              height={36}
              aria-label="button"
              role="button"
              onClick={() => onDeleteCoach(_id as string)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachCards;
