/* eslint-disable @next/next/no-img-element */

const MobileAppUpdated = () => {
    return (
        <section className="bg-[#FBEFB0] flex flex-col sm:flex-row px-5 py-10 gap-10">
            <div className="flex-1 space-y-5">
                <h2 className="text-3xl sm:text-4xl font-bold mt-20">
                    Fitness + nutrition questions answered
                </h2>
                <h5 className="w-full">
                    <p className="text-left text-lg font-normal leading-9 mt-4 max-sm:text-justify">
                        We answer all of your fitness and nutrition
                        questions, so you can focus on getting in shape.
                        Logging your food intake and workouts is easy with
                        our user-friendly app, and our team of experts are
                        always here to help. So what are you waiting for.
                    </p>
                </h5>
                <div className="flex items-center justify-start sm:justify-start gap-5">
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
            </div>
            <div className="flex-1">
                <img
                    src={"/assets/images/home/mobile_app.png"}
                    alt="Image"
                    className="object-contain mx-auto"
                />
            </div>
        </section>
    );
};

export default MobileAppUpdated;
