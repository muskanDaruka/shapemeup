"use client"
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HorizontalList from "@/components/HorizontalList";
import { Images } from "@/types/image.type";
import { useAllProducts } from "@/hooks/products.hooks";
import ProductUserCard from "@/components/ProductUserCard";
import Link from "next/link";
import Image from 'next/image';
import { IProducts } from "@/types/products.type";

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

const Products = () => {
  const { data: productData, isLoading, isError } = useAllProducts();
  const products = productData?.data?.data || [];

  if (products.length === 0) {
    return null;
  }
  return (
    <div>
      <Hero data={heroImages} />
      <br />
      <div className="flex flex-col items-center md:flex-row relative">
        {/* <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-[180px] rounded-full text-2xl font-bold absolute right-20">⟶</span> */}
        <div className="md:ml-auto md:mr-auto w-full md:w-[1100px] relative">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {productImages.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-[394px] h-[400px] md:m-0 mb-4 relative justify-center"
              >
                <Image
                  src={item.imageSrc} alt="blog_banner"
                  width={1440}
                  height={528}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-5 text-white">
                  <h1 className="font-bold text-xl text-white z-10">{item.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-[180px] rounded-full text-2xl font-bold float-left absolute left-20">⟵</span> */}
      </div>
      <br />
      <section className="relative">
        <div className="relative">
          <Image
            src="/assets/images/products/product_run.png"
            alt="image"
            width={1440}
            height={528}
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
        {/* <div className="flex relative"> */}
        {/* <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-64 rounded-full text-2xl font-bold absolute right-0">⟶</span> */}
        <div className="flex flex-col md:flex-row w-full sm:container items-center justify-center text-center mx-auto mr-10">
          {products.slice(0, 3).map((product: IProducts, index: number) => (
            <div key={index} className={`mb-4 flex w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ' md:ml-4 sm:ml-2  '}`}>
              <Link href={`/products/${product._id}`}>
                <ProductUserCard key={product.id} product={product} />
              </Link>
            </div>
          ))}
        </div>
        {/* <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-64 rounded-full text-2xl font-bold float-left absolute left-0">⟵</span> */}
        {/* </div> */}
      </section>
      <Footer />
    </div>
  )
};

export default Products;
