import { motion } from "framer-motion";
import Input from "../../components/Input";
import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-full shadow-xl overflow-hidden"
    >
      <div className="p-20">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-400 text-transparent bg-clip-text">
          ACCOUNT
        </h2>

        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type="text"
            placeholder="full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <PasswordStrengthMeter password={password} />

          <motion.button
            className="mt-5 w-full py-4 px-4 bg-gradient-to-r from-gray-300 to-gray-200 text-black font-bold rounded-full shadow-lg
            hover:from-gray-300 hover:to-gray-400 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-offset-black
            transition duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            CREATION
          </motion.button>
        </form>
      </div>
      <div className="px-8 pb-10 bg-transparent flex justify-center">
        <p className="text-sm text-black">
          already have an account?{" "}
          <Link to={"/login"} className="text-gray-500 hover:text-black">
            LOGIN
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
