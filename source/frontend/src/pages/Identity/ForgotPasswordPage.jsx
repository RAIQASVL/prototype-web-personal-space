import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import Input from "../../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center max-w-md w-full bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-full shadow-xl p-20 pb-10 pt-10"
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-400 text-transparent bg-clip-text">
        FORGOT PASSWORD
      </h2>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <p className="text-black mb-6 text-center">
            enter your email address and we'll send you a link to reset your
            password
          </p>
          <Input
            icon={Mail}
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center mt-2 w-auto py-3 px-6 bg-gradient-to-r from-gray-300 to-gray-200 text-black font-bold rounded-full shadow-lg  
            hover:from-gray-300 hover:to-gray-400 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-offset-black  
            transition duration-200"
            type="submit"
          >
            {isLoading ? (
              <Loader className="size-6 animate-spin mx-auto" />
            ) : (
              "SEND RESET LINK"
            )}
          </motion.button>
        </form>
      ) : (
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="w-16 h-16 bg-transparent rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Mail className="h-8 w-8 text-black" />
          </motion.div>
          <p className="text-gray-500 mb-6">
            If an account exists for {email}, you will receive a password reset
            link shortly.
          </p>
        </div>
      )}

      <div className="px-8 py-4 bg-transparent bg-opacity-50 flex justify-center">
        <Link
          to="/login"
          className="text-sm text-gray-500 hover:text-black flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> BACK TO LOGIN
        </Link>
      </div>
    </motion.div>
  );
};

export default ForgotPasswordPage;
