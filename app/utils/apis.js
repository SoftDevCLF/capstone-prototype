// utils/api.js
// ------------------------------------------------------------------
// Central API utility for your Python FastAPI report backend
// ------------------------------------------------------------------

const BASE_URL = "http://127.0.0.1:8000"; // The actual running backend root

// ---------------------------------------------
// Generic GET helper
// ---------------------------------------------
async function get(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`GET ${endpoint} failed: ${response.status}`);
  }

  return response.json();
}

// ---------------------------------------------
// GET PDF helper (returns blob)
// ---------------------------------------------
async function getPDF(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`GET PDF ${endpoint} failed: ${response.status}`);
  }

  return response.blob(); // PDF must be blob
}

// ------------------------------------------------------------------
// REPORT ENDPOINTS
// ------------------------------------------------------------------

// Temperature JSON fetch
export async function getTemperature(start, end) {
  return get(`/report/temperature?start=${start}&end=${end}`);
}

// Energy generated JSON fetch
export async function getEnergyGenerated(start, end) {
  return get(`/report/energy-generated?start=${start}&end=${end}`);
}

// Energy consumed JSON fetch
export async function getEnergyConsumed(start, end) {
  return get(`/report/energy-consumed?start=${start}&end=${end}`);
}

// Energy generated JSON fetch
export async function getSensorStatus(start, end) {
  return get(`/report/sensor=status?start=${start}&end=${end}`);
}





