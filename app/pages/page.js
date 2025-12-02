import PageHeader from "../components/PageHeader";

const pageHeader = {
  title: "Generate Reports Page",
  description: "page to generate reports"
}
export default function Page() {
  return (
    <main className="">
      {/* Pass header props to page header component */}
      <PageHeader {...pageHeader} />
    </main>
  );
}
