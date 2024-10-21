import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ContextObjectsPage = () => {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spheres = [
    { id: 1, size: 10, page: "/about-bio", text: "ABOUT/BIO" },
    { id: 2, size: 12, page: "/blog-channel", text: "BLOG CHANNEL" },
    { id: 3, size: 9, page: "/science", text: "SCIENCE" },
    { id: 4, size: 10, page: "/education", text: "EDUCATION" },
    { id: 5, size: 12, page: "/art", text: "ART" },
    { id: 6, size: 11, page: "/community", text: "COMMUNITY" },
    { id: 7, size: 10, page: "/it", text: "IT" },
    { id: 8, size: 11, page: "/social", text: "SOCIAL" },
    { id: 9, size: 8, page: "/credits", text: "CREDITS" },
    { id: 10, size: 13, page: "/yoga-dojo", text: "YOGA DOJO" },
    { id: 11, size: 11, page: "/brand-store", text: "BRAND STORE" },
    { id: 12, size: 10, page: "/join-home", text: "JOIN->HOME +" },
  ];

  const calculatePosition = (index, total, radius) => {
    const angle = (index / total) * Math.PI * 2;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;
    return { offsetX, offsetY };
  };

  const baseRadius = Math.min(windowSize.width, windowSize.height) * 0.3;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating orbit */}
      <motion.div
        className="absolute flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 50, // Adjusting the speed of the orbit rotation
          ease: "linear",
        }}
      >
        {spheres.map((sphere, index) => {
          const totalSpheres = spheres.length;
          const size =
            (sphere.size / 100) * Math.min(windowSize.width, windowSize.height);
          const { offsetX, offsetY } = calculatePosition(
            index,
            totalSpheres,
            baseRadius
          );

          return (
            <motion.div
              key={sphere.id}
              className="absolute flex items-center justify-center cursor-pointer"
              style={{
                left: `calc(50% + ${offsetX}px)`,
                top: `calc(50% + ${offsetY}px)`,
              }}
              onClick={() => navigate(sphere.page)}
            >
              {/* Sphere with text inside */}
              <div
                className="rounded-full border border-white backdrop-blur-md flex items-center justify-center"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Rotating text */}
                <motion.span
                  className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-wide text-center"
                  animate={{ rotate: -360 }} // Dynamics of text rotation
                  transition={{
                    repeat: Infinity,
                    duration: 50, // Adjusting the speed of the text rotation
                    ease: "linear",
                  }}
                >
                  {sphere.text}
                </motion.span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ContextObjectsPage;
