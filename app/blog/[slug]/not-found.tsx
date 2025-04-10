"use client";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-indigo-900 to-black text-white px-4">
      {/* Ghost Illustration */}
      <div className="animate-bounce mb-6">
        <svg width="150" height="150" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" fill="white" />
          <circle cx="24" cy="28" r="4" fill="black" />
          <circle cx="40" cy="28" r="4" fill="black" />
          <path
            d="M20 44c4 4 8 0 12 0s8 4 12 0"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 animate-fade-in-down">
        404
      </h1>

      {/* Message */}
      <p className="text-xl mt-4 text-gray-200 animate-fade-in">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Button */}
      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
        Go Home
      </a>

      {/* Animation Keyframes */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.5s ease-in forwards;
        }
        .animate-fade-in-down {
          animation: fadeInDown 1.5s ease-in-out forwards;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
