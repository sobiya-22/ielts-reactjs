import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BarChart3, Users, Headphones, Edit3 } from "lucide-react"

function Features() {
  const features = [
    {
      title: "Practice Tests",
      description:
        "Take full-length IELTS mock tests for Listening, Reading, Writing, and Speaking.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Vocabulary Builder",
      description:
        "Learn and revise essential IELTS vocabulary with flashcards and quizzes.",
      icon: <Edit3 className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Progress Tracking",
      description:
        "Track your scores, identify weak areas, and improve step by step.",
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Speaking Practice",
      description:
        "AI-powered speaking tests with instant feedback on fluency and pronunciation.",
      icon: <Users className="w-8 h-8 text-pink-600" />,
    },
    {
      title: "Listening Exercises",
      description:
        "Improve listening skills with audio-based practice and real exam formats.",
      icon: <Headphones className="w-8 h-8 text-orange-600" />,
    },
  ]
  return (
    <div className="items-center p-12 flex flex-col">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What does IELTS Prep offer you...
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our cutting-edge technology and proven methodologies help you achieve
          your target IELTS band score faster than traditional methods.
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="p-4 shadow-sm rounded-2xl h-full flex flex-col justify-between hover:border-blue-700 transition">
                <CardHeader className="flex flex-col items-center text-center space-y-2">
                  {feature.icon}
                  <CardTitle className="text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 text-center">
                  {feature.description}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Features
