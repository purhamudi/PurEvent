// @ts-nocheck

// import logo from '../assets/logos/purevent_colour_white.png';
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import vid1 from "@/assets/images/background/dump/videos/video1.mp4";
// import cocktailsVid1 from "@/assets/images/background/dump/videos/cocktails-1.mp4";
import { motion } from "framer-motion"; // Import Framer Motion

import OrderNow from "../sections/OrderNow/OrderNow";

export default function HomePage() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  // const { ref, isVisible } = useScrollFadeIn();

  return (
    <>
      <OrderNow />
      <Section1 />
      <div className="h-100 w-full">
        <BackgroundVideoContainer setDialogIsOpen={setDialogIsOpen}>
          <BackgroundVideo src={vid1}></BackgroundVideo>
        </BackgroundVideoContainer>
        {/* <BackgroundVideo src={vid1}></BackgroundVideo> */}
      </div>
      <Section2 />

      {/* <Button onClick={() => setDialogIsOpen(true)}>Open Large Popup</Button> */}
      <WizardDialog isOpen={dialogIsOpen} setDialogIsOpen={setDialogIsOpen} />

      <div>
        <ScrollImageSequence />
        {/* <div className="h-[500vh]"></div> Ensures enough scroll space */}
      </div>

      <div className="w-full text-[var(--foreground)]">
        <SectionFadeIn>
          <Section3 />
        </SectionFadeIn>
        <SectionFadeIn>
          <Section4 />
        </SectionFadeIn>
        <SectionFadeIn>
          <Section5 />
        </SectionFadeIn>
        <SectionFadeIn>
          <Section6 />
        </SectionFadeIn>
        <SectionFadeIn>
          <Section7 />
        </SectionFadeIn>

        {/* Footer */}
        {/* <footer className="py-6 bg-black text-white text-center">
        <p>&copy; 2025 Catering 128. All Rights Reserved.</p>
      </footer> */}
      </div>

      {/* <img src={logo} alt="Logo" /> */}
    </>
  );
}

import platesImage1 from "@/assets/images/background/dump/middle-eastern-1.jpg";
import platesImage2 from "@/assets/images/background/dump/middle-eastern-2.jpg";
import platesImage3 from "@/assets/images/background/dump/middle-eastern-3.jpg";
import platesImage4 from "@/assets/images/background/dump/middle-eastern-4.jpg";
import platesImage5 from "@/assets/images/background/dump/middle-eastern-5.jpg";
import platesImage6 from "@/assets/images/background/dump/middle-eastern-6.jpg";

const foodImages = [
  platesImage1,
  platesImage2,
  platesImage3,
  platesImage4,
  platesImage5,
  platesImage6,
];

import ChefImg from "@/assets/images/background/dump/chef-professional.png";
import FoodPlates from "@/assets/images/background/dump/food-plates.png";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

function Section1() {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-brand-50 relative flex gap-x-3 flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16"
    >
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 130 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 1.32, delay: 0.2 }}
        className="md:w-1/2 text-center md:text-left space-y-6"
      >
        <p className="text-gray-600 text-lg">
          At Catering 128, we bring passion and innovation to the art of
          catering. Our wonderful team of culinary experts is dedicated to
          curating unforgettable dining experiences tailored to your unique
          preferences.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-lg transition-all duration-300"
          >
            OUR MENU
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-400 text-white px-6 py-3 rounded-lg transition-all duration-300"
          >
            BOOK CATERING
          </motion.button>
        </div>
        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-4 pt-6">
          {["Facebook", "Instagram", "Twitter"].map((icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              {icon === "Facebook" && <Facebook size={20} />}
              {icon === "Instagram" && <Instagram size={20} />}
              {icon === "Twitter" && <Twitter size={20} />}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Image Container */}
      <div className="md:w-1/2 relative flex justify-center md:justify-end items-center">
        <div className="relative w-full max-w-md md:max-w-lg">
          {/* Background Food Image */}
          <motion.img
            src={FoodPlates}
            alt="Food Plate"
            className="w-full rounded-lg shadow-lg"
          />

          {/* Overlapping Chef Image */}
          <motion.div
            className="absolute bottom-[-40px] left-[10%] md:left-[-30px] w-48 md:w-56 lg:w-64 shadow-lg rounded-lg overflow-hidden border-4 border-white"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <img src={ChefImg} alt="Chef" className="w-full rounded-lg" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function Section2() {
  return (
    <div className="w-[fit]">
      <div className=" flex justify-center bg-gray-100">
        <div className="w-10/12 ">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent className="-ml-2">
              {foodImages.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 sm:basis-1/3 md:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                >
                  <div className="p-2">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <img
                          src={src}
                          alt={`Food item ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

import img1Section3 from "@/assets/images/background/dump/istockphoto-1457654918-1024x1024.jpg";

function Section3() {
  {
    /* Hero Section */
  }
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-20">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold text-brand-600">CATERING SERVICES</h1>
        <p className="mt-4 text-lg text-gray-600">
          At Catering 128, we bring passion and innovation to the art of
          catering. Our culinary experts craft unforgettable dining experiences
          tailored to your needs.
        </p>
        <div className="mt-6 space-x-4">
          <Button className="bg-black text-white">Our Menu</Button>
          <Button className="bg-brand-600 text-white">Book Catering</Button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={img1Section3}
          alt="Catering Dish"
          className="w-full max-w-md rounded-lg"
        />
      </div>
    </section>
  );
}

function Section4() {
  {
    /* Services Section */
  }
  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Explore our catering solutions tailored for every occasion.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 px-6 md:px-20 mt-8">
        {["Corporate Events", "Weddings", "Private Dinners"].map(
          (service, index) => (
            <Card key={index} className="p-6 text-center">
              <CardContent>
                <h3 className="text-xl font-semibold">{service}</h3>
                <p className="text-gray-600 mt-2">
                  Delicious and elegant catering for your special events.
                </p>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
}

import img1Section5 from "@/assets/images/background/dump/istockphoto-1372647490-1024x1024.jpg";
import img2Section5 from "@/assets/images/background/dump/istockphoto-1457654918-1024x1024.jpg";
import img3Section5 from "@/assets/images/background/dump/istockphoto-1372647490-1024x1024.jpg";
import img4Section5 from "@/assets/images/background/dump/istockphoto-1702862167-1024x1024.jpg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "../components/ui/dialog";
import { cn } from "../lib/utils";

const imagesSection = [img1Section5, img2Section5, img3Section5, img4Section5];
function Section5() {
  {
    /* Featured Dishes Carousel */
  }
  return (
    <section className="py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center">Featured Dishes</h2>
      <div className="mt-8 flex space-x-4 overflow-x-auto">
        {imagesSection.map((item, idx) => (
          <div
            key={item + idx}
            className="min-w-[250px] bg-white rounded-lg shadow-md"
          >
            {/* <img src={`/assets/images/dish${item}.jpg`} alt={`Dish ${item}`} className="w-full h-40 object-cover rounded-t-lg" /> */}
            <img
              src={item}
              alt={`Dish ${idx + 1}`}
              className="w-full h-40 object-cover rounded-md"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">Dish {idx + 1}</h3>
              <p className="text-gray-600">
                A delightful meal prepared with fresh ingredients.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Section6() {
  {
    /* Testimonials */
  }
  return (
    <section className="py-12 bg-gray-100 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center">What Our Clients Say</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {["Best catering ever!", "Amazing service and delicious food!"].map(
          (testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent>
                <p className="text-gray-600 italic">"{testimonial}"</p>
                <span className="block mt-4 font-semibold">
                  - Happy Customer
                </span>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
}

function Section7() {
  {
    /* Contact Form */
  }
  return (
    <section className="py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
      <form className="mt-8 max-w-lg mx-auto space-y-4">
        <Input placeholder="Your Name" className="w-full" />
        <Input type="email" placeholder="Your Email" className="w-full" />
        <Textarea placeholder="Your Message" className="w-full" />
        <Button className="w-full bg-brand-600 text-white">Send Message</Button>
      </form>
    </section>
  );
}

const SectionFadeIn = ({ children }) => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-10 transition-all delay-100 duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      {children}
    </div>
  );
};

const BackgroundVideoContainer = ({ children, setDialogIsOpen }) => {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fallback Background Image for Mobile */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fallback.jpg')" }}
      ></div>

      {/* Background Video */}
      {/* <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1200 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={src} type="video/mp4" />
      </video> */}
      {children}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl font-bold uppercase">Catering Excellence</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Experience gourmet food made with passion by top chefs.
        </p>
        <Button
          variant="ghost"
          className="mt-6 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg"
          onClick={() => setDialogIsOpen(true)}
        >
          Explore Our Menu
        </Button>
      </div>
    </div>
  );
};

const BackgroundVideo = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.82; // Slow down video
      videoRef.current.src = src;
    }
  }, [videoLoaded]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      onLoadedData={() => setVideoLoaded(true)}
      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1200 ${
        videoLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

// /Users/fadi.muhammad/Desktop/react-shadcn-app/src/assets/images/background/dump/videos/test/vid_0001.png
// `/assets/images/frames/vid_${String(i + 1).padStart(4, "0")}.png`
const frameCount = 146; // Adjust based on how many images you have
//Dynamically generate image paths
const images = Array.from(
  { length: frameCount },
  (_, i) =>
    `/src/assets/images/background/dump/videos/test/vid_${String(
      i + 1
    ).padStart(4, "0")}.png`
);
const ScrollImageSequence = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;

      // Calculate current frame based on scroll position
      const newFrame = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      setCurrentFrame(newFrame);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" top-0 left-0 w-full h-full flex items-center justify-center bg-black">
      <img
        src={images[currentFrame]}
        alt={`Frame ${currentFrame}`}
        className="w-full h-auto max-w-screen-lg"
      />
    </div>
  );
};

type DialogTestProps = {
  // handleContactUsClick:(message: string) => void;
  setDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  // children: ReactNode
};
// const DialogTest = ({ setDialogIsOpen, isOpen }: DialogTestProps) => {
//   {
//     /* Large Dialog */
//   }
//   return (
//     <Dialog open={isOpen} onOpenChange={setDialogIsOpen}>
//       {/* h-screen max-w-none w-full */}
//       <DialogOverlay className="bg-black/70" />
//       <DialogContent className="sm:max-w-5xl h-5/6 w-full min-h-[500px] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle>Large Popup</DialogTitle>
//           <DialogDescription>
//             This is a bigger modal with more space.
//           </DialogDescription>
//         </DialogHeader>

//         <div className="p-2">
//           <p>Here you can add more content.</p>
//         </div>

//         <DialogFooter>
//           <DialogClose asChild>
//             <Button variant="outline">Close</Button>
//           </DialogClose>
//           <Button onClick={() => setDialogIsOpen(false)}>Confirm</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

export function WizardDialog({ isOpen, setDialogIsOpen }: DialogTestProps) {
  // const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Stepper with Animated Dots & Lines
  const Stepper = () => (
    <div className="flex items-center w-full mb-6">
      {[1, 2, 3].map((num) => (
        <div key={num} className="flex items-center w-full">
          {`Step ${num}`}
          {/* Step Dot with Scale Animation */}
          {/* <motion.div
            animate={{ scale: step >= num ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={cn(
              "w-8 h-8 flex items-center justify-center rounded-full border-2 transition",
              step >= num ? "bg-blue-500 text-white border-blue-500" : "border-gray-300"
            )}
          >
            {num}
          </motion.div> */}

          {/* Step Line Animation */}
          {/* {index ===num-1 && (
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: step > num ? "100%" : "0%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[2px] bg-blue-500"
            />
          )} */}
        </div>
      ))}
    </div>
  );

  // Handles Next and Previous steps
  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex justify-center p-6">
      {/* Button to Open Dialog */}
      {/* <Button onClick={() => setIsOpen(true)}>Open Wizard</Button> */}

      <Dialog open={isOpen} onOpenChange={setDialogIsOpen}>
        <DialogOverlay className="bg-black/70" />
        <DialogContent className=" flex flex-col sm:max-w-5xl h-5/6 w-full min-h-[500px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Step {step} of {totalSteps}
            </DialogTitle>
          </DialogHeader>

          {/* Stepper UI */}
          <Stepper />

          {/* Step Forms */}
          <div className="p-4">
            {step === 1 && (
              <div>
                <label className="block text-sm font-medium">Name</label>
                <Input placeholder="Enter your name" />
              </div>
            )}
            {step === 2 && (
              <div>
                <label className="block text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
            )}
            {step === 3 && (
              <div>
                <label className="block text-sm font-medium">Password</label>
                <Input type="password" placeholder="Enter your password" />
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <DialogFooter className="flex justify-between p-4">
            <Button variant="outline" onClick={prevStep} disabled={step === 1}>
              Back
            </Button>
            {step < totalSteps ? (
              <Button onClick={nextStep}>Next</Button>
            ) : (
              <Button onClick={() => setDialogIsOpen(false)}>Submit</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
