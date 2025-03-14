"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
// import Image from "next/image"
import { useState } from "react"

const foodItems = [
  {
    name: "Hummus with Pita",
    description: "Creamy chickpea dip served with warm pita bread",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Falafel Plate",
    description: "Crispy chickpea fritters with tahini sauce and vegetables",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Shawarma",
    description: "Thinly sliced marinated meat with vegetables and sauce",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Tabbouleh",
    description: "Fresh parsley salad with bulgur, tomatoes, and mint",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Meze Platter",
    description: "Assortment of small dishes including olives, dips, and pickles",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Baklava",
    description: "Sweet pastry made of layers of filo filled with nuts and honey",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function FoodGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + foodItems.length) % foodItems.length)
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Middle Eastern Cuisine</h1>

      <div className="relative">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-[16/9]">
              {/* <Image
                src={foodItems[currentIndex].image || "/placeholder.svg"}
                alt={foodItems[currentIndex].name}
                fill
                className="object-cover"
                priority
              /> */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h2 className="text-xl font-semibold">{foodItems[currentIndex].name}</h2>
                <p className="text-sm opacity-90">{foodItems[currentIndex].description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          variant="secondary"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {foodItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
        {foodItems.map((item, index) => (
          <Card
            key={index}
            className={`cursor-pointer transition-all ${index === currentIndex ? "ring-2 ring-primary" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <CardContent className="p-2">
              <div className="relative aspect-square mb-2">
                {/* <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded" /> */}
              </div>
              <h3 className="font-medium text-sm">{item.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

