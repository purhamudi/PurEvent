import img1Section3 from "../../../assets/images/background/dump/istockphoto-1457654918-1024x1024.jpg";

import { Button } from "../../../components/ui/button";

export default function Section3() {
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
  