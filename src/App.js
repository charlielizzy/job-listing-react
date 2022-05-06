import logo from "./logo.svg";
import JobCard from "./components/JobCard";
import Header from "./components/Header";
import Data from "./data.json";

function App() {
  console.log(Data);
  return (
    <div className="bg-[#effafa] min-h-screen flex flex-col gap-5 items-center text-base">
      <Header />
      <div className="flex flex-col gap-5">
        {Data.map((job) => {
          return (
            <JobCard
              id={job.id}
              company={job.company}
              logo={job.logo}
              new={job.new}
              featured={job.featured}
              position={job.position}
              role={job.role}
              level={job.level}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              languages={job.languages}
              tools={job.tools}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
