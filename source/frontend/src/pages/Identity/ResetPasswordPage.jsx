import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import Input from "../../components/Input";
import { Lock, ArrowLeft, Loader } from "lucide-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, isLoading } = useAuthStore();

  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await resetPassword(token, password);
      toast.success(
        "Password reset successfully, redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error resetting password");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center max-w-md w-full bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-full shadow-xl p-20 pt-13 pb-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-400 text-transparent bg-clip-text">
        RESET PASSWORD
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <Input
          icon={Lock}
          type="password"
          placeholder="new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          icon={Lock}
          type="password"
          placeholder="confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center mt-2 w-auto py-3 px-6 bg-gradient-to-r from-gray-300 to-gray-200 text-black font-bold rounded-full shadow-lg  
                    hover:from-gray-300 hover:to-gray-400 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-offset-black  
                    transition duration-200"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader className="size-6 animate-spin mx-auto" />
          ) : (
            "SET NEW PASSWORD"
          )}
        </motion.button>
      </form>

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

export default ResetPasswordPage;
