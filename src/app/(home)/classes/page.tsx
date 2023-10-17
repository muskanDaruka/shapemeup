
import { IcardImages, Images } from "@/types/type";
import HorizontalList from "@/components/HorizontalList";

const list = ["Weight loss", "Walk fitness", "Body toning", "Strength training", " Calorie Crush"]
const Classes = () => {
  return (
    <div>
      <section className="relative">
        <div className="relative">
          {/* <img
            src="/assets/images/classes/class.png"
            alt="class"
            className="relative w-full object-cover h-auto min-h-[490px]"
          /> */}
          <div className="h-96 bg-[url('/assets/images/classes/class.png')] bg-no-repeat">

            <h2 className="text-black text-4xl font-bold">
              April 2022 Weight Loss class
            </h2>

            <button className="bg-[#f2994a] text-white h-10 px-20 rounded-md ">
              Enroll
            </button>

          </div>
        </div>
      </section>
      <section className="">
        <h2>Classes for you</h2>
        <HorizontalList data={list} />
      </section>
    </div>
  );
};

export default Classes;
