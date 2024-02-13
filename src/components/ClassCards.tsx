/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import Image from "next/image";

import editIcon from "../images/icons/edit.svg";
import deleteIcon from "../images/icons/delete.svg";
import { IClass } from "@/types/classes.type";
import Link from "next/link";
import { useUpdateClasses } from "@/hooks/classes.hooks";
import { useParams, useRouter } from "next/navigation";

type Props = IClass & {
  onDeleteClasses: (id: string) => void;

};

const ClassCards: FC<Props> = ({
  name,
  photoUrl,
  releaseDate,
  type,
  days,
  duration,
  _id,
  onDeleteClasses,

}) => {
  const navigation = useRouter();
  const { mutate: updateClasses } = useUpdateClasses({
    _id,
    name,
    photoUrl,
    description: "",
    assignedCoach: "",
    releaseDate,
    type,
    days,
    duration,
    durationType: "",
    videoUrl: "",
    videos: [],
    about: "",
    benefits: "",

  });
  const handleEditClick = async () => {
    navigation.push(`/admin/classes/${_id}`);
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
          <h5 className="text-[#F2994A] text-xl font-bold">{name}</h5>

          <h6>
            Release date: <small>{releaseDate !== null && releaseDate !== undefined ? releaseDate.toString() : 'N/A'}</small>
          </h6>
          <h6>
            Type: <small>{type}</small>
          </h6>
          <h6>
            Number of days: <small>{days}</small>
          </h6>
          <h6>
            Duration: <small>{duration}</small>
          </h6>

          <div className="flex items-center justify-start gap-5">
            <Link href={`/admin/classes/${_id}`}>
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
              onClick={() => onDeleteClasses(_id as string)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCards;
