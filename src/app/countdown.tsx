"use client";

import { useEffect, useState } from "react";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function InaugurationPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("Feb 16, 2026 09:15:00").getTime();


    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

       setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#7E49F2] text-white px-6 text-center relative">
      
      {/* Coming Soon Badge - Poppins */}
      <div className={`${poppins.className} mb-6 px-4 py-1 bg-white rounded-full text-sm font-semibold text-[#7e49f2]`}>
        COMING SOON
      </div>
      
      {/* Company Name - Poppins Bold */}
      <h1 className={`${poppins.className} text-5xl md:text-7xl font-bold mb-4`}>
        LORENTA <span className="">TECHNOLOGIES</span>
      </h1>

      {/* Tagline - Inter */}
      <p className={`${inter.className} text-xl md:text-2xl text-white mb-12`}>
        Something Big is Coming!!!
      </p>
{/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, veritatis reprehenderit. Optio inventore dolore aliquid, praesentium iusto voluptates, nobis facilis neque atque reiciendis error porro eius nihil. Debitis, laboriosam qui. */}
      {/* Countdown Numbers - Poppins */}
      <div className={`flex flex-wrap justify-center gap-6 md:gap-10 text-4xl md:text-6xl ${poppins.className}`}>
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <span className="text-white drop-shadow-lg font-bold">
              {String(value).padStart(2, "0")}
            </span>
            <span className={`${inter.className} text-sm uppercase mt-2 text-white font-medium`}>
              {key}
            </span>
          </div>
        ))}
      </div>

      

      {/* Footer - Inter */}
      <p className={`${inter.className} absolute bottom-4 text-white text-sm`}>
        © 2026 Lorenta Technologies. All Rights Reserved.
      </p>
    </div>
  );
}