import { Card, CardContent } from "../../../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../components/ui/carousel";


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


export default function Section2() {
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