import logo from "./logo.svg";
import JobCard from "./components/JobCard";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-[#effafa] min-h-screen flex flex-col gap-5 items-center text-base">
      <Header />
      <div className="flex flex-col gap-5">
        <JobCard
          id="1"
          company="Photosnap"
          logo="/images/photosnap.svg"
          new="true"
          featured="true"
          position="Senior Frontend Developer"
          role="Frontend"
          level="Senior"
          postedAt="1d ago"
          contract="Full Time"
          location="USA only"
          languages={["HTML", "CSS", "Javascript"]}
          tools={["React"]}
        />
      </div>
    </div>
  );
}
export default App;
