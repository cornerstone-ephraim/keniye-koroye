"use client";

type WorkPillsProps = {
  pills: string[];
};

export function WorkPills({ pills }: WorkPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {pills.map((pill) => (
        <span
          key={pill}
          className="border border-rule px-2 py-[0.2rem] flex justify-center items-center font-mono text-[0.58rem] tracking-[0.12em] text-muted uppercase"
        >
          {pill}
        </span>
      ))}
    </div>
  );
}
