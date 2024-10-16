import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useAuthStore } from "../../store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-full shadow-xl overflow-hidden"
    >
      <div className="p-20 pb-10">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-400 text-transparent bg-clip-text">
          WELCOME BACK
        </h2>

        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-center  items-center mb-2">
            <Link
              to={"/forgot-password"}
              className="text-sm text-gray-500 hover:text-black"
            >
              forgot password?
            </Link>
          </div>
          {error && (
            <p className="text-center text-red-500 font-semibold mb-2">
              {error}
            </p>
          )}
          <motion.button
            className="mt-5 w-full py-8 px-8 bg-gradient-to-r from-gray-300 to-gray-200 text-black font-bold rounded-full shadow-lg
            hover:from-gray-300 hover:to-gray-400 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-offset-black
            transition duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="w-6-h-6 animate-spin mx-auto" />
            ) : (
              "LOGIN"
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 pb-10 bg-transparent flex flex-col items-center justify-center">
        <p className="text-sm text-black">
          don't have an account?{" "}
          <Link
            to={"/signup"}
            className="flex justify-center text-gray-500 hover:text-black"
          >
            CREATE ACCOUNT
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
export default LoginPage;
