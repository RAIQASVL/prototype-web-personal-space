import { Navigate, Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";

import SignUpPage from "./pages/Identity/SignUpPage";
import LoginPage from "./pages/Identity/LoginPage";
import EmailVerificationPage from "./pages/Identity/EmailVerificationPage";
import DashboardPage from "./pages/Identity/DashboardPage";
import ForgotPasswordPage from "./pages/Identity/ForgotPasswordPage";
import ResetPasswordPage from "./pages/Identity/ResetPasswordPage";

import LoadingSpinner from "./components/LoadingSpinner";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import AquonelocalPage from "./pages/core/AquonelocalPage";
import ContextObjectsPage from "./pages/core/ContextObjectsPage";

// Protect routes that require authentication, but not Dashboard as default
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// Separate component to handle default landing at Dashboard
// const DefaultDashboard = () => {
//   const { isAuthenticated } = useAuthStore();

//   if (!isAuthenticated) {
//     // Let user still access the dashboard, but protect sensitive features if necessary
//     return <Navigate to="/login" replace />;
//   }

//   // Return the main dashboard as default landing page
//   return <DashboardPage />;
// };

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-white
    to-black flex items-center justify-center relative overflow-hidden"
    >
      <FloatingShape
        color="bg-black"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-black"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-black"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />
      {/* Core Pages as INTRO */}
      <Routes>
        <Route path="/intro" element={<AquonelocalPage />} />
        <Route path="/contexts" element={<ContextObjectsPage />} />
        {/* Identity Pages */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        {/* catch all routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
