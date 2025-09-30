import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"

function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      review: "This app helped me score Band 8. The mock tests felt like the real exam!",
    },
    {
      name: "Sofia Khan",
      review: "Speaking practice with instant feedback boosted my confidence a lot.",
    },
    {
      name: "Liam Patel",
      review: "The vocabulary builder made learning easy. My reading scores improved quickly.",
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students who achieved their dream IELTS scores with our app.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 shadow-md rounded-2xl bg-white hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <CardHeader className="flex flex-col items-center text-center space-y-2">
                <Quote className="w-6 h-6 text-indigo-600" />
                <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 text-center italic mt-2">
                “{testimonial.review}”
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
