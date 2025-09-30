import React from 'react'
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

function Hero() {
    return (
        <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-12 sm:pt-16 pb-16 sm:pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-sm font-medium">
                        Best Platform to prep for IELTS
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                        Master IELTS with
                        <span className="text-blue-600"> AI-Powered</span>
                        <span className="text-yellow-500"> Training</span>
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Join over 50,000 students who achieved their dream IELTS scores with our
                        comprehensive training program, personalized feedback, and expert guidance.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                        <Button variant='outline' size='sm' className="flex items-center gap-2 text-green-600 bg-green-100 hover:bg-green-200 rounded-full">
                            <Check className="w-4 h-4 text-green-600" /> AI-powered
                        </Button>
                        <Button variant='outline' size='sm' className="flex items-center gap-2 text-green-600 bg-green-100 hover:bg-green-200 rounded-full">
                            <Check className="w-4 h-4 text-green-600" /> Special mock tests
                        </Button>
                        <Button variant='outline' size='sm' className="flex items-center gap-2 text-green-600 bg-green-100 hover:bg-green-200 rounded-full">
                            <Check className="w-4 h-4 text-green-600" /> Expert instructors
                        </Button>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                        <Button size="lg" className="text-blue-500 border-2 bg-blue-100 hover:bg-blue-200">
                            Start for Free
                        </Button>
                        <Button variant="outline" size="lg">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvLjLMJxMGLX97cc-tlW7ShApi7lKF0GeQA&s"
                        alt="IELTS students studying"
                        className="w-full h-64 sm:h-80 md:h-[450px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;
