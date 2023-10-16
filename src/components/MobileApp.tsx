/* eslint-disable @next/next/no-img-element */

const MobileApp = () => {
  return (
    <section className="bg-white flex flex-col sm:flex-row px-5 py-10 gap-10">
      <div className="flex-1 space-y-5">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Get the app for the most effective results
        </h2>
        <h5 className="w-full">
          <p className="text-left text-lg font-normal leading-9 mt-4 max-sm:text-justify">
            Looking for a way to get in shape? Shape me up can help! With our
            easy-to-use program, you can achieve real results faster than you
            imagined. So why wait? Get started today and see the difference for
            yourself!
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

export default MobileApp;
