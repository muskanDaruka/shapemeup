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
      <section className="flex">
        <div className="items-center space-y-1">
          <div>
            < div className=" mt-10 justify-left border-slate-25 border-2 rounded-lg w-[1000px] m-[50px] ml-15 ">
              <div className="flex">
                <div>
                  <img src="/assets/images/blogs/water.png"
                    alt="image"
                    className="h-[275.037px] w-[832.295px]" />
                </div>
                <div className="h-[272.037px]">
                  <h1 className="font-bold text-2xl mt-5 ml-5 mr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                  <p className="font-normal  text-xl mt-2 ml-5 mr-5">Lorem ipsum dolor sit amet,
                    consectetur iscing elit, sed
                    do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis</p>
                  <a href="#" id="readMoreLink" className="text-[#f2994a] transition duration-300 hover:underline ml-5">Read More&gt;&gt;</a>
                  <div className="flex">
                    <span className="text-black font-bold ml-5 mt-5">21 October 2023</span>
                    <span className="font-bold mt-5 ml-[430px]">Fitness</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-25 w-[1100px] h-[202px] sm:container mx-auto">
              <div className="flex">
                <div className="flex-shrink-0 w-[450px] h-[442px] m-[20px] ml-[50px] border-slate-250 border-2 rounded-lg ">
                  <img src="/assets/images/blogs/equipments.png"
                    alt="blog_banner"
                    className="w-[450px] object-cover h-[215px] flex-shrink-0 rounded-lg" />
                  <h1 className="font-bold mt-5 ml-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                  <p className="font-normal mt-2 ml-5">Lorem ipsum dolor sit amet,
                    consectetur iscing elit, sed
                    do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis</p>
                  <a href="#" id="readMoreLink" className="text-[#f2994a] transition duration-300 hover:underline ml-5">Read More&gt;&gt;</a>
                  <div className="flex">
                    <span className="text-black font-bold ml-5 mt-5">21 October 2023</span>
                    <span className="font-bold mt-5 ml-[230px]">Fitness</span>
                  </div>
                </div>
                <div className="flex-shrink-0 w-[450px] h-[442px] ml-[50px] m-[20px] border-slate-250 border-2 rounded-lg ">
                  <img src="/assets/images/blogs/workout.png"
                    alt="blog_banner"
                    className="w-[450px] object-cover h-[215px] flex-shrink rounded-lg" />
                  <h1 className="font-bold mt-5 ml-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                  <p className="font-normal t-2 ml-5">Lorem ipsum dolor sit amet,
                    consectetur iscing elit, sed
                    do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis</p>
                  <a href="#" id="readMoreLink" className="text-[#f2994a] transition duration-300 hover:underline ml-5">Read More&gt;&gt;</a>
                  <div className="flex">
                    <span className="text-black font-bold ml-5 mt-5">21 October 2023</span>
                    <span className="font-bold mt-5 ml-[230px]">Fitness</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1000px] h-[202px]">
              <div className="flex mt-[300px]">
                <div className="flex-shrink-0 w-[450px] h-[442px] ml-[50px] m-[20px] border-slate-250 border-2 rounded-lg ">
                  <img src="/assets/images/blogs/blogs.png"
                    alt="blog_banner"
                    className="w-[450px] object-cover h-[215px] flex-shrink rounded-lg" />
                  <h1 className="font-bold mt-5 ml-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                  <p className="font-normal mt-2 ml-5">Lorem ipsum dolor sit amet,
                    consectetur iscing elit, sed
                    do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis</p>
                  <a href="#" id="readMoreLink" className="text-[#f2994a] transition duration-300 hover:underline ml-5">Read More&gt;&gt;</a>
                  <div className="flex">
                    <span className="text-black font-bold ml-5 mt-5">21 October 2023</span>
                    <span className="font-bold  mt-5 ml-[230px]">Fitness</span>
                  </div>
                </div>
                <div className="flex-shrink-0 w-[450px] h-[442px] ml-[50px] m-[20px] border-slate-250 border-2 rounded-lg ">
                  <img src="/assets/images/blogs/blog_img.png"
                    alt="blog_banner"
                    className=" w-[450px] object-cover h-[215px] flex-shrink rounded-lg " />
                  <h1 className="font-bold mt-5 ml-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                  <p className="font-normal mt-2 ml-5">Lorem ipsum dolor sit amet,
                    consectetur iscing elit, sed
                    do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis</p>
                  <a href="#" id="readMoreLink" className="text-[#f2994a] transition duration-300 hover:underline ml-5">Read More&gt;&gt;</a>
                  <div className="flex">
                    <span className="text-black font-bold ml-5 mt-5">21 October 2023</span>
                    <span className="font-bold mt-5 ml-[230px]">Fitness</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-[100px">
            <button className="w-[70px] text-black border-slate-250 border-2 mt-[330px] ml-[480px]">&lt;&lt;Pre</button>
            <button className="w-[70px] text-black border-slate-250 border-2">Page 1</button>
            <button className="w-[70px] text-[#f2994a] border-slate-250 border-2">Next&gt;&gt;</button>
          </div>
        </div>
        <div className=" w-px h-[1500px] bg-gray-400">
          <div className="w-[600px] h-[1500px]">
            <h2 className="font-bold text-2xl ml-5 mt-10">Trending Topics</h2>
            <hr />
            <div className="mt-5 m-5">
              <h1 className="font-bold text-xl ml-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className="font-normal mt-2 ml-5">
                Lorem ipsum dolor sit amet,
                consectetur iscing elit, sed
                do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis</p>
              <a href="#" id="readMoreLink" className="text-[#f2994a] transition duration-300 hover:underline ml-5">Read More&gt;&gt;</a>
              <div className="flex mb-5">
                <span className="text-black font-bold ml-5 mt-5">21 October 2023</span>
                <span className="font-bold mt-5 ml-[350px]">Fitness</span>
              </div>
              <hr />
            </div>
            <div className="mt-5 m-5">
              <h1 className="font-bold text-xl ml-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className="font-normal mt-2 ml-5">
                Lorem ipsum dolor sit amet,
                consectetur iscing elit, sed
                do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis</p>
              <a href="#" id="readMoreLink" className="text-[#f2994a] transition duration-300 hover:underline ml-5">Read More&gt;&gt;</a>
              <div className="flex mb-5">
                <span className="text-black font-bold ml-5 mt-5">21 October 2023</span>
                <span className="font-bold mt-5 ml-[350px]">Fitness</span>
              </div>
              <hr />
            </div>
            <div className="mt-5 m-5">
              <h1 className="font-bold text-xl ml-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className="font-normal mt-2  ml-5">
                Lorem ipsum dolor sit amet,
                consectetur iscing elit, sed
                do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis</p>
              <a href="#" id="readMoreLink" className="text-[#f2994a] transition duration-300 hover:underline ml-5">Read More&gt;&gt;</a>
              <div className="flex mb-20">
                <span className="text-black font-bold ml-5 mt-5">21 October 2023</span>
                <span className="font-bold mt-5 ml-[350px]">Fitness</span>
              </div>
              <hr />
            </div>
            <h2 className="font-bold text-2xl ml-5 mt-10">Categories</h2>
            <div className="ml-10 mt-10">
              <div className="row">
                <button className="border-slate-250 border-2 w-40 text-black p-4 m-1 rounded-lg">Category</button>
                <button className="border-slate-250 border-2  w-60 text-black p-4 m-1 rounded-lg">Category</button>
                <button className="border-slate-250 border-2  w-50 text-black p-4 m-1 rounded-lg">Category</button>
              </div>
              <div className="row">
                <button className="border-slate-250 border-2 text-black  w-60 m-1 p-4 rounded-lg">Category</button>
                <button className="border-slate-250 border-2 text-black w-64 m-1  p-4 rounded-lg">Category</button>

              </div>
              <div className="row">
                <button className="border-slate-250 border-2 w-40 text-black p-4 m-1 rounded-lg">Category</button>
                <button className="border-slate-250 border-2  w-60 text-black p-4 m-1 rounded-lg">Category</button>
                <button className="border-slate-250 border-2  w-50 text-black p-4 m-1 rounded-lg">Category</button>
              </div>
              <div className="row">
                <button className="border-slate-250 border-2 text-black  w-60 m-1 p-4 rounded-lg">Category</button>
                <button className="border-slate-250 border-2  text-black w-64 m-1  p-4 rounded-lg">Category</button>
              </div>
              <div className="row">
                <button className="border-slate-250 border-2 w-40 text-black p-4 m-1 rounded-lg">Category</button>
                <button className="border-slate-250 border-2 w-60 text-black p-4 m-1 rounded-lg">Category</button>
                <button className="border-slate-250 border-2 w-50 text-black p-4 m-1 rounded-lg">Category</button>
              </div>
              <div className="row">
                <button className="border-slate-250 border-2 text-black  w-60 m-1 p-4 rounded-lg">Category</button>
                <button className="border-slate-250 border-2 text-black w-64 m-1  p-4 rounded-lg">Category</button>
              </div>
              <div className="row">
                <button className="border-slate-250 border-2  w-40 text-black p-4 m-1 rounded-lg">Category</button>
                <button className="border-slate-250 border-2 w-60 text-black p-4 m-1 rounded-lg">Category</button>
                <button className="border-slate-250 border-2 w-50 text-black p-4 m-1 rounded-lg">Category</button>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className="relative">
        <div className="relative">
          <img
            src="/assets/images/coaches/coach_banner.png"
            alt="coach_banner"
            className="relative w-screen object-cover h-auto min-h-[490px]"
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
    </div >
  );
};

export default Blogs;
