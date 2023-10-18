import Footer from "@/components/Footer";
import MobileAppUpdated from "@/components/MobileAppUpdated";

const Coaches = () => {
  return (
    <div>
      <section className="relative">
        <div className="relative">
          <img
            src="/assets/images/coaches/coach_main_banner.png"
            alt="coaches_coach_banner"
            className="relative w-full object-cover h-auto min-h-[490px]"
          />
          <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10 ">
            <h2 className="text-white text-5xl font-bold ">
              On demand digital personal coaches
            </h2>
            <h3 className="text-white text-2xl font-normal w-583 h-168 m-10">
              <center>
                "Tone up, firm up, and sculpt your body into the shape you've always wanted with the help of a workout coach! These personal coaches will help motivate you to reach your fitness goals, whether you're looking to lose weight, build muscle, or just get in better shape."
              </center>
            </h3>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5] w-full px-5 py-10 space-y-5">
        <h3 className="text-black text-5xl font-bold mb-20"><center>Our Coaches</center></h3>
      </section>
      <section className="w-full px-5 py-10 space-y-5 ">
        <div>
          <h3 className="text-black text-5xl font-bold mb-20"><center>Your very own personal coaches</center></h3>
          <div className="flex space-x-5 mx-64">

            <div>
              <div className="w-96 h-80 bg-[#FBEFB0] text-black mt-10 rounded-lg">
                <center>
                  <img
                    src="/assets/images/coaches/fitness.png"
                    alt="coaches_fitness"
                    className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                  />
                </center>
                <h2 className="mt-10"><center>
                  Fitness + diet plan and questions answered</center>
                </h2>
                <p className="mt-10"><center>
                  We answer all of your fitness and nutrition questions, so you can focus on getting in shape. Logging your food intake and workouts is easy with our user-friendly app, and our team of experts are always here to help. So what are you waiting for.</center>
                </p>
              </div>
              <div className="w-0 h-0 
                  border-l-[50px] border-l-transparent
                  border-t-[75px] border-[#FBEFB0]
                  border-r-[50px] border-r-transparent  mx-40"  >
              </div>
            </div>

            <div className="m-10 w-96 h-80 border-slate-250 border-2 rounded-lg">
              <center>
                <img
                  src="/assets/images/coaches/personalized.png"
                  alt="coaches_personalized"
                  className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                />
              </center>
              <h2 className="mt-5"><center>
                Personalized coaching + recommendations</center>
              </h2>
              <p className="mt-5"><center>
                We offer personalized coaching and recommendations to help you reach your fitness goals. Whether you're looking to lose weight, gain muscle, or just get healthy, we can help.</center>

              </p>
            </div >
            <div className="m-10 w-96 h-80 border-slate-250 border-2 rounded-lg">
              <center>
                <img
                  src="/assets/images/coaches/fitness.png"
                  alt="coaches_fitness"
                  className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                />
              </center>
              <h2 className="mt-5"><center>
                Get help from your coaches</center>
              </h2>
              <p className="mt-5"><center>
                These personal trainers will help motivate you to reach your fitness goals, whether you're looking to lose weight, build muscle, or just get in better shape.</center>
              </p>

            </div>

          </div>
        </div>
      </section>
      <MobileAppUpdated />
      <Footer />
    </div>
  );
};

export default Coaches;
