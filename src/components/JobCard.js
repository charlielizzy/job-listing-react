function JobCard() {
  return (
    <div className="bg-white px-10 py-8 flex max-w-5xl h-fit flex justify-between shadow-lg shadow-[#5ba4a4]-100 rounded-md items-center border-l-4 border-[#5ba4a4] gap-72">
      <div className="flex items-center">
        <img src="/images/photosnap.svg" className="pr-6 h-20" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="text-[#5ba4a4]">Photosnap</div>
            <div className="bg-[#5ba4a4] text-white rounded-3xl px-3 py-1 text-xs">
              NEW!
            </div>
            <div className="bg-black text-white rounded-3xl px-2 py-1 text-xs">
              FEATURED
            </div>
          </div>
          <div className="font-bold text-lg">Senior Frontend Developer</div>
          <div className="text-[#7C8F8F]">1d ago • Full Time • USA only</div>
        </div>
      </div>
      <div className="flex h-max items-center gap-2">
        <div className="bg-[#effafa] text-[#5ba4a4] rounded-md px-2 py-1">
          Frontend
        </div>
        <div className="bg-[#effafa] text-[#5ba4a4] rounded-md px-2 py-1">
          Senior
        </div>
        <div className="bg-[#effafa] text-[#5ba4a4] rounded-md px-2 py-1">
          HTML
        </div>
      </div>
    </div>
  );
}

export default JobCard;
