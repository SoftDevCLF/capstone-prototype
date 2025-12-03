"use client";

import ReportDropdown from "../components/ReportRelated/ReportDropdown";
import Calendar from "../components/ReportRelated/Calendar";
import Footer from "../components/footer";
import Navbar from "../components/nav-bar";
import EmptyHeader from "../components/empty-header"; 


export default function Page() {
  return (
    <main className="">
      {/* Pass header props to page header component */}
      <EmptyHeader/>
      <Navbar/>
      <h1>Reports</h1>
      <ReportDropdown/>
      <Calendar/>
      <Footer/>
    </main>
  );
}
