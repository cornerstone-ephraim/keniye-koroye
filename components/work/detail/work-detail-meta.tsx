type WorkDetailMetaProps = {
  meta: [string, string][];
  pills: string[];
};

export function WorkDetailMeta({ meta, pills }: WorkDetailMetaProps) {
  return (
    <div className="border-t border-rule pt-6">
      <div className="flex flex-wrap gap-x-10 gap-y-5">
        {meta.map(([label, value]) => (
          <div key={label}>
            <div className="font-mono text-[0.56rem] tracking-[0.18em] text-muted uppercase">
              {label}
            </div>
            <div className="mt-1 font-fraunces text-[0.9rem] leading-snug">
              {value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="font-mono text-[0.56rem] tracking-[0.18em] text-muted uppercase">
          Focus
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {pills.map((pill) => (
            <span
              key={pill}
              className="border border-rule px-2 py-[0.2rem] font-mono text-[0.56rem] tracking-[0.12em] text-muted uppercase"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
