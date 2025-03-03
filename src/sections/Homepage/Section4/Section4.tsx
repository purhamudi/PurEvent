import { Card, CardContent } from "../../../components/ui/card";

export default function Section4() {
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
  