"use client";

import PageHeader from "../components/PageHeader";
import ReportDropdown from "../components/ReportRelated/ReportDropdown";
import Calendar from "../components/ReportRelated/Calendar";
import dynamic from "next/dynamic";

const pageHeader = {
  title: "Generate Reports Page",
  description: "page to generate reports"
}

export default function Page() {
  return (
    <main className="">
      {/* Pass header props to page header component */}
      <PageHeader {...pageHeader} />
      <h1>Reports</h1>
      <ReportDropdown/>
      <p>Select Date Range: </p>
      <Calendar/>
    </main>
  );
}
