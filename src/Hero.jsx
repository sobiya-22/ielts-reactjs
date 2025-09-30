import React from 'react'
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

function Hero() {
    return (
        <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16 pb-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-sm font-medium">
                        Best Platform to prep for IELTS
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Master IELTS with
                        <span className="text-blue-600"> AI-Powered</span>
                        <span className="text-yellow-500"> Training</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Join over 50,000 students who achieved their dream IELTS scores with our
                        comprehensive training program, personalized feedback, and expert guidance.
                    </p>

                    <div className="space-y-5">
                        <div className="flex items-center space-x-6">
                            <Button variant='outline' size='lg' className="text-green-600 bg-green-100 hover:bg-green-200 rounded-full"><Check className="w-5 h-5 text-green-600" />AI-powered</Button>
                            <Button variant='outline' size='lg' className="text-green-600 bg-green-100 hover:bg-green-200 rounded-full"><Check className="w-5 h-5 text-green-600" />Special mock tests</Button>
                            <Button variant='outline' size='lg' className="text-green-600 bg-green-100 hover:bg-green-200 rounded-full"><Check className="w-5 h-5 text-green-600" />Expert instructors</Button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button size="lg" className="text-blue-500 border-2 bg-blue-100 hover:bg-blue-200"> Start for Free</Button>
                        <Button variant="outline" size="lg" > Learn More</Button>
                    </div>
                </div>
                <div className="relative">
                    {/* <div className="relative z-10"> */}
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvLjLMJxMGLX97cc-tlW7ShApi7lKF0GeQA&s"
                        alt="IELTS students studying"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                    />
                    {/* </div> */}
                </div>
            </div>

        </section >
    )
}

export default Hero;