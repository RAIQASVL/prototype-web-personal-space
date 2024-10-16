import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import { formatDate } from "../../utils/date";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-full shadow-xl overflow-hidden"
    >
      <div className="p-20 pb-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-400 text-transparent bg-clip-text">
          DASHBOARD
        </h2>

        <div className="space-y-6">
          <motion.div
            className="p-6 bg-transparent bg-opacity-50 rounded-full border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-black mb-3">
              profile Information
            </h3>
            <p className="text-black">name: {user.name}</p>
            <p className="text-black">email: {user.email}</p>
          </motion.div>
          <motion.div
            className="p-6 bg-transparent bg-opacity-50 rounded-full border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-black mb-3">
              account activity
            </h3>
            <p className="text-gray-800 text-sm">
              <span className="font-bold">joined: </span>
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-black text-sm">
              <span className="font-bold">last Login: </span>

              {formatDate(user.lastLogin)}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex self-center bg-gradient-to-r from-gray-300 to-gray-200 text-black font-bold rounded-full py-3 px-4 shadow-lg  
            hover:from-gray-300 hover:to-gray-400 focus:outline-none 
            focus:ring-black focus:ring-offset-2 focus:ring-offset-black focus:ring-opacity-50 disabled:opacity-50"
          >
            LOGOUT
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default DashboardPage;
