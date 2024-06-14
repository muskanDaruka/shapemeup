"use client";
import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import leftArrow from "./../../../../images/icons/leftArrow.svg";
import { IExercise } from "../../../../types/exercise.type";
import Link from "next/link";
import {
  useExerciseById,
  useCreateExercise,
  useUpdateExercise,
} from "@/hooks/exercise.hooks";
import { useParams, useRouter } from "next/navigation";

const NewExercisePage = () => {
  const navigation = useRouter();
  const { id }: { id: string } = useParams();
  const { data: exerciseData } = useExerciseById(id);
  const { mutate: addExercise } = useCreateExercise();
  const { mutate: updateExercise } = useUpdateExercise({} as IExercise);
  // const queryClient = useQueryClient();

  const [exercise, setExercise] = useState<IExercise>({
    _id: "",
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
    metaTitle: "",
    metaDescription: "",
  } as IExercise);


  const handleEditorChange = (value: string) => {
    setExercise((prev) => ({ ...prev, instructions: value } as IExercise));
  };

  const onHandleChange = (e: any) => {
    const {
      target: { name, value },
    } = e;
    setExercise(
      (prev) =>
      ({
        ...prev,
        [name]: value,
      } as typeof prev)
    );
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
        console.log("Updated:", exercise);
        await updateExercise(exercise);
      } else {

        console.log("exercise", exercise)
        await addExercise(exercise);

      }

      navigation.push("/admin/exercise"); // Use push instead of back to navigate to the updated page
    } catch (error) {
      console.error("Error updating exercise: ", error);
    }
  };

  const handleBrowseClick = (fieldName: keyof typeof exercise) => {
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
            setExercise((prev) => ({
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


  useEffect(() => {
    console.log(exerciseData);
    if (exerciseData?.data?.data) {
      setExercise(exerciseData?.data?.data);
    }
  }, [exerciseData]);

  console.log("exercise.instructions:", exercise.instructions);
  return (
    <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
      <div className="w-20">
        <Link href={"/admin/exercise"}>
          <Image src={leftArrow} alt="Back" width={24} height={24} />
        </Link>
      </div>
      <form onSubmit={onHandleSubmit} onKeyDown={onFormKeyDown} className="flex-1 w-full">
        <div className="flex flex-col gap-5">
          <h5 className="font-bold">Add New Exercise</h5>
          <div className="flex items-end justify-between gap-3">
            <div className="grid gap-2 w-full">
              <label htmlFor="image">Upload exercise video</label>
              <input
                type="text"
                id="video"
                className="rounded-md px-3 h-10 w-full border border-gray-300"
                name="videoUrl"
                onChange={onHandleChange}
                value={exercise.videoUrl || ''}
                required
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
                required
              />
            </div>
            <button
              type="button"
              className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
              onClick={() => handleBrowseClick('imageUrl')}
            >
              +Browse
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
              required
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
              required
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
              required
            />
          </div>
          <div className="flex items-end justify-between gap-3">
            <div className="grid gap-2 w-full">
              <label htmlFor="time">Time</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="time"
                  name="time"
                  className="rounded-md px-3 h-10 w-full border border-gray-300"
                  onChange={onHandleChange}
                  value={exercise.time ?? ""}
                  required
                />
                <select
                  name="durationType"
                  className="rounded-md px-3 h-10 border border-gray-300"
                  onChange={onHandleChange}
                  value={exercise.durationType || ''}
                >
                  <option value="seconds">Seconds</option>
                  <option value="minutes">Minutes</option>
                  <option value="hours">Hours</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid gap-2 w-full">
            <label htmlFor="category">Difficulty</label>
            <select
              id="difficulty"
              name="difficulty"
              className="rounded-md px-3 h-10 w-full border border-gray-300 bg-white"
              onChange={onHandleChange}
              value={exercise.difficulty}
              required
            >
              <option value="">Easy/Medium/Hard</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="grid gap-2 w-full" aria-required >
            <label htmlFor="Instructions">Instructions</label>
            <ReactQuill
              theme="snow"
              id="instructions"
              value={exercise.instructions}
              onChange={handleEditorChange}
              modules={modules}
            />
          </div>
          <div className="grid gap-2 w-full mt-8">
            <label htmlFor="externalLinks">External links</label>
            <input
              type="text"
              id="externalLinks"
              name="externalLinks"
              className="rounded-md px-3 h-10 w-full border border-gray-300"
              onChange={onHandleChange}
              value={exercise.externalLinks}
              required
            />
          </div>
          <div className="grid gap-2 w-full" >
            <label htmlFor="metaTile"> Meta title </label>
            < input
              type="text"
              id="metaTitle"
              name="metaTitle"
              className="rounded-md px-3 h-10 w-full border border-gray-300"
              onChange={onHandleChange}
              value={exercise.metaTitle}
              required
            />
          </div>
          < div className="grid gap-2 w-full" >
            <label htmlFor="metaDescription" > Meta description </label>
            < input
              type="text"
              id="metaDescription"
              name="metaDescription"
              className="rounded-md px-3 h-10 w-full border border-gray-300"
              onChange={onHandleChange}
              value={exercise.metaDescription}
              required
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
