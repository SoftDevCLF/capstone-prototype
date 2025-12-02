export default function LoginForm() {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
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
        className="w-full border px-3 py-2 rounded mb-4"
        style={{ fontFamily: "var(--font-dm-sans)" }}
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
        className="w-full border px-3 py-2 rounded mb-6"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      />

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
        Login
      </button>
    </div>
  );
}
