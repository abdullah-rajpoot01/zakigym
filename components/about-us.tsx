import React from 'react'
import AboutFeatures from './about-features'
import CTA from './cta'

const AboutUs = () => {
    return (
        <div className='relative w-full'>
            <div className="relative min-h-screen w-full flex py-10 items-center justify-center overflow-hidden px-6 bg-black/90 bg-[url('/gym/pexels-dimkidama-6796964.jpg')] bg-cover bg-center bg-fixed">

                <div className="relative z-10 max-w-4xl text-center px-5 md:p-0 overflow-hidden">

                    <h1 className="mx-auto mt-6 max-w-full font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem] md:text-6xl/[1.2] text-background pt-10">
                        About Zaki Gym Khanewal
                    </h1>
                    <p className="mx-auto mt-6 max-w-full text-background/80 text-xl md:text-2xl/normal">
                        Zaki Gym Khanewal is built with one mission — to help people transform their lives through fitness, discipline, and consistency. We believe fitness is not just about building muscles, but about building confidence, health, and a strong mindset.
                    </p>
                </div>
            </div>
            <AboutFeatures />
            <CTA/>
        </div>
    )
}

export default AboutUs