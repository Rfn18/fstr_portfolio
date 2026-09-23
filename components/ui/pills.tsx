import { PillsProps } from "@/props";

export function Pills({ list, className }: PillsProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {list.map((item) => (
        <li
          key={item}
          className="rounded-full bg-white/50 hover:bg-surface hover:text-white transition duration-300 ease-in-out px-3.5 py-1.5 text-[13px] leading-none tracking-tight text-surface/60 sm:px-4 sm:py-2 sm:text-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
