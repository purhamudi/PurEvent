import { Card, CardContent } from "../../../components/ui/card";

export default function Section6() {
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