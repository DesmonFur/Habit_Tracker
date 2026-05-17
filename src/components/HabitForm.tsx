import { useState } from "react";

type HabitFormProps = {
  onAdd: (name: string) => void;
};
export function HabitForm({ onAdd }: HabitFormProps) {
  const [draft, setDraft] = useState<string>("");
  return (
    <div className="flex items-center justify-center gap-3">
      <input
        className="w-1/2 bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:border-emerald-500"
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
      />
      <button
        className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-500 transition-colors"
        onClick={() => {
          onAdd(draft);
          setDraft("");
        }}
      >
        Add Habit
      </button>
    </div>
  );
}
