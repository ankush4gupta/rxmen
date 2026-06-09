import clsx from "clsx";

interface TransactionCardProps {
  merchant: string;
  date: string;
  amount: string;
  category: string;
  positive?: boolean;
  className?: string;
}

export default function TransactionCard({
  merchant,
  date,
  amount,
  category,
  positive,
  className,
}: TransactionCardProps) {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl p-4 shadow-sm border border-peach/20 min-w-[280px]",
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-sans font-semibold text-navy text-sm">{merchant}</span>
        <span className="text-navy/40 text-xs font-sans">{date}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className={clsx("font-serif font-bold text-xl", positive ? "text-green-600" : "text-navy")}>
          {positive ? "+" : "−"}₹{amount}
        </span>
        <span className="text-xs bg-cream-dark text-navy/60 font-sans px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <span>🍔</span> {category}
        </span>
      </div>
    </div>
  );
}
