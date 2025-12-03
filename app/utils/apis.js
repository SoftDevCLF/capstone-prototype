// TODO: Add API call to fetch PDF URL for a selected report
// Example: export async function getReportPdf(reportId) { ... }

// TODO: Decide whether backend returns:
// 1) A direct PDF URL, OR
// 2) A PDF blob (binary file)
// Handle both cases.

// TODO: If backend returns a blob:
// - Convert blob to object URL
// - Return object URL for printing/downloading

// TODO: Add try/catch around all API requests
// - Log errors
// - Return null or throw custom error

// TODO: Add API base URL using NEXT_PUBLIC_API
// const BASE_URL = process.env.NEXT_PUBLIC_API;

// TODO: Add authorization headers later if needed

// TODO: Test request with a placeholder reportId
// - Check browser network tab for correct response type

// TODO: Export all functions so components can call them:
// export { getReportPdf };