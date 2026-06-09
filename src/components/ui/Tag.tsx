import clsx from "clsx";
import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Tag({ children, icon, className, active, onClick }: TagProps) {
  return (
    <span
      onClick={onClick}
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-medium border transition-all",
        active
          ? "bg-navy text-cream border-navy"
          : "bg-white/60 text-navy/60 border-navy/10 hover:border-navy/30",
        className
      )}
    >
      {icon && <span className="opacity-60">{icon}</span>}
      {children}
    </span>
  );
}
