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
          className="absolute right-0 mt-2 w-96 bg-white border border-gray-300 rounded shadow-md flex items-center p-3 gap-3 z-50"
        >
          {/* Icon */}
          <ExclamationCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />

          {/* Message */}
          <span className="flex-1 text-sm text-gray-800">
            Are you sure you want to log out?
          </span>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700"
              onClick={handleLogout}
            >
              Accept
            </button>
            <button
              className="bg-gray-200 text-gray-800 px-4 py-1 rounded text-sm hover:bg-gray-300"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
