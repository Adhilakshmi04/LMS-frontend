import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword.localeCompare(confirmPassword) === 0) {
      try {
        const response = await fetch(`http://localhost:5000/api/auth/reset-password/${token}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newPassword }),
        });
        const data = await response.json();
        if (data.success) {
          setNewPassword("");
          setConfirmPassword("");
          toast.success(data.message);
          navigate("/", { replace: true });
        } else {
          toast.error(data.message);
        }
      } catch {
        toast.error("Error resetting password.");
      }
    } else {
      toast.error("Passwords do not match!");
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-row bg-[#141e49]">
      {/* Left side - Image with proper scaling */}
      <div className="w-1/2 relative hidden md:block bg-[#070D24]">
        {/* Full image container with proper styling */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="https://i.pinimg.com/736x/bf/49/7f/bf497f8e4ce13c334fecdec4f7118de5.jpg"
            alt="Educational background"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.2) contrast(1.1)",
              height: "100vh", // Ensure the image height matches the screen size
            }}
          />
        </div>

        {/* Semi-transparent overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070D24]/80 via-transparent to-[#070D24]/80"></div>

        {/* Logo and welcome text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-12">
          <div className="transform transition-all duration-700 ease-out mb-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-10 h-10 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <h1 className="text-4xl font-bold text-gray-200">
                EduSpace
              </h1>
            </div>
            <p className="text-blue-300 text-xl font-semibold tracking-wide mt-2">
              Empowering Learning, One Click at a Time
            </p>
          </div>

          {/* Stats display with elegant design */}
          <div className="flex justify-center items-center space-x-16 py-6 mt-auto backdrop-blur-sm bg-slate-800/50 px-10 rounded-lg shadow-lg border border-slate-700/30">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-300">500+</p>
              <p className="text-sm text-gray-300 font-semibold mt-1">Courses</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-300">10,000+</p>
              <p className="text-sm text-gray-300 font-semibold mt-1">Students</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-300">50+</p>
              <p className="text-sm text-gray-300 font-semibold mt-1">Educators</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Reset Password Form */}
      <div className="w-full md:w-1/2 bg-[#070D24] flex flex-col items-center justify-center px-4 py-10 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 pattern-bg"></div>

        {/* Reset Password form with clean design */}
        <div className="w-full max-w-md z-10 transition-all duration-700 ease-out">
          <div className="px-8 py-8 md:py-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-200 mb-2">Reset Your Password</h2>
              <p className="text-gray-400">Enter your new password below</p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">New Password</label>
                <input
                  className="w-full p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-800 text-white placeholder-gray-400 text-base"
                  type="password"
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Confirm Password</label>
                <input
                  className="w-full p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-800 text-white placeholder-gray-400 text-base"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 mt-6 bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Add subtle professional styling */}
      <style jsx global>{`
        .pattern-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default ResetPassword;