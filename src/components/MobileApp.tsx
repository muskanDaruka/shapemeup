/* eslint-disable @next/next/no-img-element */

const MobileApp = () => {
  return (
    <section className="bg-white flex justify-center items-center flex-col sm:flex-row px-5 py-10 gap-10 sm:ml-32">
      <div className="flex-1 space-y-5">
        <h2 className="text-2xl sm:text-4xl font-bold">
          Get the app for the most effective results
        </h2>
        <h5 className="w-full">
          <p className="text-left text-sm font-normal leading-9 mt-4 max-sm:text-justify">
            Looking for a way to get in shape? Shape me up can help! With our
            easy-to-use program, you can achieve real results faster than you
            imagined. So why wait? Get started today and see the difference for
            yourself!
          </p>
        </h5>
        <div className="flex items-center justify-start sm:justify-start sm:gap-5 mt-4">
          <img
            src={"/assets/images/home/googleplay.png"}
            alt="Image"
            className="object-contain max-sm:w-[145px]"
          />
          <img
            src={"/assets/images/home/appstore.png"}
            alt="Image"
            className="object-contain max-sm:w-[160px]"
          />
        </div>
      </div>
      <div className="flex-1 sm:ml-8">
        <img
          src={"/assets/images/home/mobile_app.png"}
          alt="Image"
          className="object-contain"
        />
      </div>

    </section>
  );
};

export default MobileApp;
