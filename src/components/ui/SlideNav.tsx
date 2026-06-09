import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface SlideNavProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
  dark?: boolean;
}

export default function SlideNav({ onPrev, onNext, className, dark }: SlideNavProps) {
  const base = clsx(
    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90",
    dark
      ? "bg-navy/80 text-cream hover:bg-navy"
      : "bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/40"
  );

  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <button onClick={onPrev} className={base} aria-label="Previous">
        <ChevronLeft size={18} />
      </button>
      <button onClick={onNext} className={base} aria-label="Next">
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
