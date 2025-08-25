import React from "react";

export default function Notfound() {
  return (
    <div>
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center mb-16 p-6">
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="relative mb-12">
            <h1 className="text-[120px] md:text-[180px] font-bold text-white tracking-tighter">
              <span className="relative">
                <span
                  className="absolute inset-0"
                  style={{
                    color: "#ff9800",
                    opacity: 0.7,
                    animation: "glitch-1 2.5s infinite",
                  }}
                >
                  404
                </span>
                <span
                  className="absolute inset-0"
                  style={{
                    color: "#ff9800",
                    opacity: 0.7,
                    animation: "glitch-2 3s infinite",
                  }}
                >
                  404
                </span>
                <span className="relative">404</span>
              </span>
            </h1>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Oops! Something went wrong :(
          </p>

          <button
            className="relative px-8 py-4 text-white font-bold rounded-lg overflow-hidden group"
            style={{ backgroundColor: "#ff9800" }}
          >
            <a href="/">
              {" "}
              <span className="relative z-10">Back to Home</span>
            </a>{" "}
            <span
              className="absolute inset-0"
              style={{
                backgroundColor: "#ff9800",
                opacity: 0,
                transition: "opacity 0.3s",
              }}
            />
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <div
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: "#ff9800",
              animation: "float 3s ease-in-out infinite",
              animationDelay: "0.1s",
            }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: "#ff9800",
              animation: "float 3s ease-in-out infinite",
              animationDelay: "0.3s",
            }}
          />
          <div
            className="w-4 h-4 rounded-full"
            style={{
              backgroundColor: "#ff9800",
              animation: "float 3s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          />
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes glitch-1 {
            0% { transform: translate(0); }
            20% { transform: translate(-5px, 5px); }
            40% { transform: translate(-5px, -5px); }
            60% { transform: translate(5px, 5px); }
            80% { transform: translate(5px, -5px); }
            100% { transform: translate(0); }
          }
          @keyframes glitch-2 {
            0% { transform: translate(0); }
            25% { transform: translate(5px, -5px); }
            50% { transform: translate(-5px, 5px); }
            75% { transform: translate(5px, 5px); }
            100% { transform: translate(0); }
          }
        `,
          }}
        />
      </section>
    </div>
  );
}
