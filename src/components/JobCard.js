function JobCard() {
  return (
    <div className="bg-white px-10 py-8 flex m-5 max-x-xl">
      <img src="/images/photosnap.svg" className="pr-6" />
      <div className="flex justify-between">
        <div>
          <div>Badges</div>
          <div>job title</div>
          <div>time ago, full time, location</div>
        </div>

        <div>Labels (frontend, senior, HTML, CCSS, JS)</div>
      </div>
    </div>
  );
}

export default JobCard;
