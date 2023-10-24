import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HorizontalList from "@/components/HorizontalList";
import { Images } from "@/types/type";

const list = ["Protein suppliments", "Fitness clothing", "Fitness equipments"]
const heroImages: Images[] = [
  {
    image: "exercise/exercise_banner",
    title: "Products",
    description:
      "The Future of Fitness is At-Home",
    buttonText: "",
  },
  {
    image: "home/gym",
    title: "Products",
    description:
      "The Future of Fitness is At-Home",
    buttonText: "",
  },
  {
    image: "exercise/exercise_banner_01",
    title: "Products",
    description:
      "The Future of Fitness is At-Home",
    buttonText: "",
  },
];
const productImages = [
  {
    imageSrc: "/assets/images/classes/full_body_workout.png",
    title: "Protein suppliments",

  },
  {
    imageSrc: "/assets/images/exercise/situp.png",
    title: "Fitness Clothing",

  },
  {
    imageSrc: "/assets/images/classes/abs_workout.png",
    title: "Fitness equipments",
  },
];
const productImage = [
  {
    imageSrc: "/assets/images/blogs/equipments.png",
    name: "Product name",

  },
  {
    imageSrc: "/assets/images/home/gym.png",
    name: "Product name",
  },
  {
    imageSrc: "/assets/images/blogs/equipments.png",
    name: "Product name",
  },
  {
    imageSrc: "/assets/images/home/gym.png",
    name: "Product name",
  },
];

const Products = () => {
  return (
    <div>
      <Hero data={heroImages} />
      <div className="flex relative">
        <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-[180px] rounded-full text-2xl font-bold absolute right-20">⟶</span>
        <div className="ml-[140px] w-[1100px] h-[400px]">
          <div className="flex">
            {productImages.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[410px] h-[520px] m-[25px] ml-[70px] rounded-lg relative "
              >
                <img src={item.imageSrc} alt="blog_banner" className="w-full object-cover h-[350px] flex-shrink rounded-lg" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-5 text-white">
                  <h1 className="font-bold text-xl text-white z-10">{item.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-[180px] rounded-full text-2xl font-bold float-left absolute left-20">⟵</span>
      </div>
      <section className="relative">
        <div className="relative">
          <img
            src="/assets/images/products/product_run.png"
            alt="image"
            className="relative w-screen object-cover h-auto min-h-[490px]"
          />
          <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
            <h2 className="text-white text-4xl font-bold">
              Run like a wind
            </h2>
            <p className="text-white text-xl font-normal">Flat 35% off on running shoes</p>
          </div>
        </div>
      </section>
      <section className="m-[40px]">
        <h1 className="text-black text-4xl mb-[20px] font-bold"><center>Featured products</center></h1>
        <HorizontalList data={list} />
        <div className="flex relative">
          <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-64 rounded-full text-2xl font-bold absolute right-0">⟶</span>
          <div className="ml-[140px] w-[1100px] h-[500px]">
            <div className="flex">
              {productImage.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[350px] h-[400px] m-[20px] mt-[25px] ml-[5px] border-slate-250 border-2 rounded-lg "
                >
                  <img src={item.imageSrc} alt="blog_banner" className="w-full object-cover h-[280px] flex-shrink rounded-lg" />
                  <div className="p-5">
                    <h1 className="font-bold mt-5">{item.name}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-64 rounded-full text-2xl font-bold float-left absolute left-0">⟵</span>
        </div>
      </section>
      <Footer />
    </div>
  )
};

export default Products;
