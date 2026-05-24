import React from 'react'

const CTA = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="bg-gray-100 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Zaki Gym – Best Unisex Fitness Center for Men & Women in Khanewal
          </h2>
          <p className="hidden text-gray-700 sm:mt-4 sm:block">
           Zaki Gym in Khanewal offers a safe and modern fitness space for both men and women. With separate areas, expert trainers, and affordable plans, it's the perfect place for cardio, strength training, and weight loss. Join now to start your fitness journey!
          </p>
          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded-sm border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-blue-600"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt=""
          src="https://images.pexels.com/photos/16996376/pexels-photo-16996376.jpeg"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />
        <img
          alt=""
          src="https://images.pexels.com/photos/31783554/pexels-photo-31783554.jpeg"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default CTA