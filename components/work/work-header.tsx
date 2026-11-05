export function WorkHeader() {
  return (
    <header className="border-b border-rule px-6 pt-10 pb-12 md:px-12">
      <div>
        {/* <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 border-b border-rule pb-4 font-mono text-xs text-muted">
          <span>Work</span>
          <span>Portfolio</span>
        </div> */}
        <div className="mt-8 grid items-center gap-8">
          <div>
            <h1 className="font-playfair text-5xl leading-[1.05] font-normal tracking-tight text-ink sm:text-6xl xl:text-7xl">
              Selected <em className="text-accent">work.</em>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Art, fashion, software, products, hardware, and technology.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
