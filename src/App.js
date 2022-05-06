import logo from "./logo.svg";
import JobCard from "./components/JobCard";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-[#effafa] min-h-screen flex flex-col gap-5 items-center text-base">
      <Header />
      <div className="flex flex-col gap-5">
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}
export default App;
