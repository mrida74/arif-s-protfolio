
import React from "react";
import Image from "next/image";

const ProfileSection = () => (
   <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-12 bg-white dark:bg-gray-900 rounded-xl shadow mt-2">
      {/* details */}
      <div className="order-1 md:order-2 flex-1 flex flex-col justify-center items-start text-gray-900 dark:text-gray-100">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-orange-400">
          About My Journey
        </h2>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 max-w-xl">
          I am passionate about technology and creativity. My journey has been shaped by curiosity, dedication, and a drive to make a positive impact. I love building beautiful, functional web experiences and continuously learning new things.
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Web Developer & Designer</li>
          <li>Strong background in Mathematics</li>
          <li>Experience with React, Next.js, Tailwind CSS</li>
          <li>Open to collaboration and new opportunities</li>
        </ul>
      </div>
      {/* image */}
      <div className="order-2 md:order-1 flex-1 flex justify-center items-center mb-8 md:mb-0 w-full">
        <div className="relative w-full h-full md:w-full md:h-full flex items-center justify-center">
          <div className="w-full h-full p-[4px] rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
            <Image
              src="/profile-large.png"
              alt="Profile Large"
              width={528}
              height={608}
              className="w-full h-full object-cover rounded-2xl shadow-2xl bg-white dark:bg-gray-900"
            />
          </div>
        </div>
      </div>
    </section>
);

export default ProfileSection;
