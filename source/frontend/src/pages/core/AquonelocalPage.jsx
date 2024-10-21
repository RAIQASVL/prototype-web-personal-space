import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AquonelocalPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contexts");
  };

  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full border border-white backdrop-blur-md"
      onClick={handleClick}
      style={{
        width: "300px", // Circle size
        height: "300px",
        zIndex: 10, // Ensure it's above background elements
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Slightly transparent background
        left: "40%", // Center horizontally
        top: "30%", // Center vertically
        transform: "translate(-50%, -50%)", // True centering
      }}
      initial={{ opacity: 0.8 }}
      animate={{
        opacity: [0.7, 0.9, 0.8], // Slight fade in and out
        x: [0, 10, -10, 0], // Very gentle horizontal movement
        y: [0, 10, -10, 0], // Very gentle vertical movement
      }}
      transition={{
        duration: 6, // Slow, smooth animation
        repeat: Infinity, // Continuous loop
        ease: "easeInOut",
      }}
    >
      {/* AQUONELOCAL Text in a Circle */}
      <span
        className="text-black text-4xl font-bold tracking-wider"
        style={{
          transform: "rotate(0deg)", // Ensure text is not rotated
        }}
      >
        AQUONELOCAL
      </span>
    </motion.div>
  );
};

export default AquonelocalPage;
