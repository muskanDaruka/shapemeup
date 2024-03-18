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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";

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
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.3333);
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === products.length - 1 ? 0 : prevSlide + 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? products.length - 1 : prevSlide - 1));
  };
  useEffect(() => {
    const handleResize = () => {
      setCenterSlidePercentage(window.innerWidth > 425 ? 33.3333 : 100);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // if (products.length === 0) {
  //   return null;
  // }
  return (
    <div>
      <Hero data={heroImages} />
      <br />
      <div className="flex flex-col items-center md:flex-row relative">
        <Image src="/assets/images/icons/previous.png" alt="previous" width={37} height={37} className="cursor-pointer absolute left-8 hidden sm:block" />
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
        <Image src="/assets/images/icons/next.png" alt="next" width={37} height={37} className="cursor-pointer absolute right-8 hidden sm:block" />
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
        <HorizontalList data={list} setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
        <Image src="/assets/images/icons/previous.png" alt="previous" width={37} height={37} onClick={handlePrevClick} className="cursor-pointer absolute left-8 hidden" />
        <Image src="/assets/images/icons/next.png" alt="next" width={37} height={37} onClick={handleNextClick} className="cursor-pointer absolute right-8 hidden" />
        <div className="sm:ml-16 items-center justify-center ">
          <Carousel showArrows={false} infiniteLoop={true} showThumbs={false} showStatus={false} centerMode={true}
            centerSlidePercentage={centerSlidePercentage} selectedItem={currentSlide} onChange={(index) => setCurrentSlide(index)}>
            {products.map((product: IProducts, index: number) => (
              <div key={index} className={`mb-4 flex py-5 ${index % 2 === 0 ? 'w-full md:w-1/2' : 'w-full md:w-1/2'}`}>
                <Link href={`/products/${product._id}`}>
                  <ProductUserCard key={product.id} product={product} />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <Footer />
    </div>
  )
};

export default Products;
