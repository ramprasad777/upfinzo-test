import React, { useRef } from "react";
import { motion } from "framer-motion";
import BookDemo from "./BookDemo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';
import Button from "../Button/Button";

const Support = ()=>{
    const sliderRef = useRef(null);

    // var settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     centerMode: true,
    //     centerPadding: '40px',
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //           breakpoint: 1200,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //           },
    //         },
    //         {
    //           breakpoint: 1008,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //           },
    //         },
            
    //       ],
    //   };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '40px',
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
      };
    const items = [
    {
      image: "/support/digital-payments.png",
      label: "AI-Powered Lending",
    },
    {
        image: "/support/ai-powered.png",
        label: "AI Powered",
    },
    {
      image: "/support/Merchant-Onboard.png",
      label: "Merchant Onboarding",
    },
    {
      image: "/support/Insurtech-Products.png",
      label: "Insurtech Products",
    },
    {
        image: "/support/neo-bank.png",
        label: "NEO Bank",
      },
  ];

    return(
        <section class="support-section">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto px-4 py-12">
                <div class="flex flex-col sm:flex-row md:flex-col gap-4 text-left text-white">
                    <div class="text-left mb-8">
                        <h2 class="text-2xl font-normal text-blue-400">24/7 support</h2>
                        <h1 class="text-6xl font-normal text-white leading-[1.1]">Industry Standard</h1>
                    </div>
                    <ul class="text-lg check-list">
                        <li class="flex items-center space-x-4 leading-[2.5]">
                            <img src="/task_alt.svg" alt="check icon" />
                            <p>Modern & clean design</p>
                        </li>

                        <li class="flex items-center space-x-4 leading-[2.5]">
                            <img src="/task_alt.svg" alt="check icon" />
                            <p>Easy to customize</p>
                        </li>

                        <li class="flex items-center space-x-4 leading-[2.5]">
                            <img src="/task_alt.svg" alt="check icon" />
                            <p>Scalability & Integration</p>
                        </li>

                        <li class="flex items-center space-x-4 leading-[2.5]">
                            <img src="/task_alt.svg" alt="check icon" />
                            <p>Step-by-step guide</p>
                        </li>

                        <li class="flex items-center space-x-4 leading-[2.5]">
                            <img src="/task_alt.svg" alt="check icon" />
                            <p>SaaS based solution</p>
                        </li>
                    </ul>

                    <div class="text-left mt-8">
                        <Button link="#" text="Get Started" style="primaryBtn" /> 
                    </div>
                </div>
                <div class="carousel-wrapper w-full flex flex-col items-center py-20 relative  md:col-span-2">
                    {/* <div className="absolute bottom-0 w-[900px] h-[200px] bg-purple-600 blur-[120px] opacity-40 pointer-events-none"></div> */}
                    <div class="relative w-full h-auto">
                        <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full max-w-5xl"
                    >
                        <img
                        src="/RHS-Laptop.png"  // <-- you replace this path
                        className="w-full pointer-events-none select-none"
                        alt="Laptop Mockup"
                        />
                        <div className="
                            slider-frame
                            absolute 
                            top-[9%] left-[8%] 
                            w-[84%] h-[66%] 
                            overflow-hidden 
                            rounded-xl 
                            bg-black/40 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ y: 40 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="w-full h-full px-2"
                            >
                                <Slider ref={sliderRef} {...settings}>
                                {items.map((item, index) => (
                                    <div key={index} className="px-3">
                                    <div className="slider-card bg-gradient-to-b from-[#A97DD4] to-black rounded-xl p-3">
                                        <img
                                        src={item.image}
                                        className="w-full h-48 object-cover rounded-lg"
                                        alt={item.label}
                                        />
                                        <p className="text-left text-white text-lg font-semibold mt-3 pl-1">
                                        {item.label}
                                        </p>
                                    </div>
                                    </div>
                                ))}
                                </Slider>
                            </motion.div>
                        </div>
                        <div className="slider-navigation absolute bottom-[-25px] left-0 flex gap-4">
                            <button
                                onClick={() => sliderRef.current.slickPrev()}
                                className="w-10 h-10 rounded-full bg-[#2d1a5a] text-white flex items-center justify-center hover:bg-[#42257e] transition"
                            >
                                ←
                            </button>
                            <button
                                onClick={() => sliderRef.current.slickNext()}
                                className="w-10 h-10 rounded-full bg-[#2d1a5a] text-white flex items-center justify-center hover:bg-[#42257e] transition"
                            >
                                →
                            </button>
                        </div>
                    </motion.div>
                    </div>
                </div>
            </div>
            <BookDemo />
        </section>
    )
}
export default Support;