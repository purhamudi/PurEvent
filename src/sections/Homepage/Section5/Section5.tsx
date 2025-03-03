import { default as img1Section5, default as img3Section5 } from "@/assets/images/background/dump/istockphoto-1372647490-1024x1024.jpg";
import img2Section5 from "@/assets/images/background/dump/istockphoto-1457654918-1024x1024.jpg";
import img4Section5 from "@/assets/images/background/dump/istockphoto-1702862167-1024x1024.jpg";

const imagesSection = [img1Section5, img2Section5, img3Section5, img4Section5];
export default function Section5() {
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