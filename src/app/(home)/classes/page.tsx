import HorizontalList from "@/components/HorizontalList";
import Footer from "@/components/Footer";

const list = ["Weight loss", "Walk fitness", "Body toning", "Strength training", " Calorie Crush"]
const Classes = () => {
  return (
    <div>
      <section className="relative">
        <div className="relative flex bg-gradient-to-r from-[#f0f5ff] via-[#f0f5ff] to-[#c2d4f7]">
          <div className="mx-5 my-5 font-bold">
            <h2 className="text-black text-4xl font-bold m-8">
              April 2022 Weight Loss class
            </h2>
            <div className="flex w-full lg:w-1/3 p-4 space-x-20">
              <h5 className="text-black font-normal text-2xl mt-0 mx-5 gap-10">Type:Weightloss</h5>
              <h5 className="text-black font-normal text-2xl mt-0 mx-5 gap-10">Number of Days:10 days</h5>
              <h5 className="text-black font-normal text-2xl mt-0 mx-5 gap-10">Duration:30 minutes/day</h5>
            </div>

            <p className="text-2xl font-normal mx-10 my-5">
              Looking for a way to get in shape? With this course you can
              achieve real results faster than you imagined. Mark this event
              in your calender for an early access.
            </p>

            <button className="bg-[#f2994a] text-white h-10 px-20 rounded-md mx-10 ">
              Enroll
            </button>
          </div>
          <div>
            <img
              src="/assets/images/classes/class_banner.png"
              alt="class"
              className="relative mx-300 w-full object-cover h-full min-h-[490px]"
            />
          </div>
        </div>
      </section>
      <section className="text-4xl m-24">
        <h2 className="font-bold"><center>Classes for you</center></h2><br />
        <HorizontalList data={list} />
        <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-10 rounded-full text-2xl font-bold float-right">⟶</span>
        <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-10 rounded-full text-2xl font-bold float-left">⟵</span>
      </section>
      <section >
        <div className="bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 h-full w-full">
          <h1 className="text-black text-4xl font-bold m-8 "><center>Use our app to access courses anywhere.</center></h1>
          <p className="text-black text-2xl  m-8"><center>
            You can create a customized diet plan that fits your
            needs and lifestyle. We'll work with you to develop a
            plan that is tailored specifically for you, and we'll
            provide all the support you need to make sure you reach
            your goals. So don't wait any longer! Get started today
            with us.</center>
          </p>
          <div className="flex items-center justify-center sm:justify-center gap-5 mx-40">
            <img
              src={"/assets/images/home/googleplay.png"}
              alt="Image"
              className="object-contain max-sm:w-[150px]"
            />
            <img
              src={"/assets/images/home/appstore.png"}
              alt="Image"
              className="object-contain max-sm:w-[168px]"
            />
          </div>
          <img
            src={"/assets/images/classes/classes_app.png"}
            alt="Image"
            className="relative w-screen"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Classes;
