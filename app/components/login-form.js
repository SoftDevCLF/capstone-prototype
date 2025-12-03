"use client";
import { useState } from "react";
import Modal from "./modal";

export default function LoginForm() {
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleForgotSubmit = () => {
    alert(
      `If employee number ${employeeNumber} exists, an email will be sent.`
    );
    setShowForgotModal(false);
    setEmployeeNumber("");
  };

  const handleRequestSubmit = () => {
    alert(
      `Access request for employee number ${employeeNumber} sent to admin.`
    );
    setShowRequestModal(false);
    setEmployeeNumber("");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 relative">
      {/* Heading */}
      <h2
        className="text-3xl font-bold text-center mb-6"
        style={{ fontFamily: "var(--font-titillium)" }}
      >
        Login
      </h2>

      <label
        className="font-semibold"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Employee Number
      </label>
      <input
        type="text"
        placeholder="Enter your Employee Number"
        value={employeeNumber}
        onChange={(e) => setEmployeeNumber(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <label
        className="font-semibold"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Password
      </label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-2"
      />

      <div className="flex justify-between mb-6 text-sm">
        <button
          type="button"
          className="text-blue-600 hover:underline"
          onClick={() => setShowForgotModal(true)}
        >
          Forgot my password
        </button>
        <button
          type="button"
          className="text-blue-600 hover:underline"
          onClick={() => setShowRequestModal(true)}
        >
          Request access
        </button>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
        Login
      </button>

      {showForgotModal && (
        <Modal
          title="Forgot Password"
          onClose={() => setShowForgotModal(false)}
        >
          <input
            type="text"
            placeholder="Enter your Employee Number"
            value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <button
            className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 mt-2 w-full"
            onClick={handleForgotSubmit}
          >
            Send
          </button>
        </Modal>
      )}

      {showRequestModal && (
        <Modal
          title="Request Access"
          onClose={() => setShowRequestModal(false)}
        >
          <input
            type="text"
            placeholder="Enter your Employee Number"
            value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <button
            className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 mt-2 w-full"
            onClick={handleRequestSubmit}
          >
            Send
          </button>
        </Modal>
      )}
    </div>
  );
}
