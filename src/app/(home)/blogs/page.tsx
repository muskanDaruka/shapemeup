import Link from "next/link";
import Footer from "@/components/Footer";
const Blogs = () => {
  return (
    <div>
      <section className="relative">
        <div className="relative">
          <img
            src="/assets/images/blogs/banner.png"
            alt="blog_banner"
            className="relative w-full object-cover h-auto min-h-[490px]"
          />
          <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
            <h2 className="text-white text-5xl font-bold ">
              Our Blogs
            </h2>
            <h3 className="text-white text-2xl font-normal w-583 h-168">
              <center>
                "Fitness freaks, this one is for you. Today we are going to talk about the best way to work out - and it's not what you think. In fact, the traditional methods of working out may be doing more harm than good. So if you're looking to get fit fast, keep reading!"
              </center>
            </h3>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center space-y-2">
        <div className="w-px h-40 bg-gray-950"></div>
        <div className="text-left">
          <h2 className="font-bold text-2xl mt-35 m-20">Trending Topics</h2>
          <h2 className="font-bold text-2xl mb-35 m-20">Categories</h2>
        </div>
      </div>
      <section>

      </section>
      <section className="relative">
        <div className="relative">
          <img
            src="/assets/images/coaches/coach_banner.png"
            alt="coach_banner"
            className="relative w-full object-cover h-auto min-h-[490px]"
          />
          <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
            <h2 className="text-white text-4xl font-bold">
              Get customized classes
            </h2>
            <Link href={"/coaches"}>
              <button className="bg-[#f2994a] text-white py-4 px-16 rounded-md text-lg">
                See our Coaches
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;
