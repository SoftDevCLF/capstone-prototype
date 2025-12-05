// Central API utility Python FastAPI report backend

//Constant to hold the connection to the backend root
const BASE_URL = "http://127.0.0.1:8000"; 


// Generic GET helper to retrieve endpoints from the backend
async function get(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`GET ${endpoint} failed: ${response.status}`);
  }
  return response.json();
}

// GET PDF helper returns blob (binary large object)
async function getPDF(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`GET PDF ${endpoint} failed: ${response.status}`);
  }
  return response.blob(); 
}

// REPORT ENDPOINTS

//CALENDAR
// Temperature JSON fetch CALENDAR
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
  return get(`/report/sensor-status?start=${start}&end=${end}`);
}

//LAST 7 DAYS
// Temperature JSON fetch for last 7 days
export async function getTemperatureLast7() {
  return get("/report/temperature/last7");
}

// Energy generated JSON fetch for last 7 days
export async function getEnergyGeneratedLast7() {
  return get("/report/energy-generated/last7");
}

// Energy generated JSON fetch for last 7 days
export async function getEnergyConsumedLast7() {
  return get("/report/energy-consumed/last7");
}
// Sensor Status for last 7 days
export async function getSensorStatusLast7() {
  return get("/report/sensor-status/last7");
}

//lAST 30 DAYS
// Temperature JSON fetch for last 30 days
export async function getTemperatureLast30() {
  return get("/report/temperature/last30");
}

// Energy generated JSON fetch for last 30 days
export async function getEnergyGeneratedLast30() {
  return get("/report/energy-generated/last30");
}

// Energy consumed JSON fetch for last 30 days
export async function getEnergyConsumedLast30() {
  return get("/report/energy-consumed/last30");
}

// Sensor Status for last 30 days
export async function getSensorStatusLast30() {
  return get("/report/sensor-status/last30");
}







