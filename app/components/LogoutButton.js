"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"; // Tailwind Heroicons

export default function LogoutButton() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const popupRef = useRef(null);

  const handleLogout = () => {
    router.push("/login");
  };

  // Close popup if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <button
        className="bg-[#005EB8] text-white font-medium rounded-xl px-5 py-2 hover:underline"
        style={{ fontFamily: "var(--font-titillium)" }}
        onClick={() => setShowPopup(!showPopup)}
      >
        Logout
      </button>

      {showPopup && (
        <div
          ref={popupRef}
          className="absolute top-14 right-10 w-96 z-[99999] bg-gradient-to-r from-white via-[#DFF6FF]  to-[#DFF6FF] shadow-lg rounded-2xl flex items-center p-5 gap-3 pointer-events-auto"

        >
          {/* Icon */}
          <ExclamationCircleIcon className="w-8 h-10 text-[#005EB8]" />

          {/* Message */}
          <span className="flex-1 text-sm font-bold text-black" style={{ fontFamily: "var(--font-titillium)" }}>
            Are you sure you want to log out?
          </span>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              className="bg-[#005EB8] text-white font-semibold px-4 py-1 rounded text-sm hover:bg-[#004D96]"
              onClick={handleLogout}
              style={{ fontFamily: "var(--font-titillium)" }}
            >
              Accept
            </button>
            <button
              className="bg-white outline-1 text-[#005EB8] font-semibold px-4 py-1 rounded text-sm hover:bg-[#004D96] hover:text-white"
              onClick={() => setShowPopup(false)}
              style={{ fontFamily: "var(--font-titillium)" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
