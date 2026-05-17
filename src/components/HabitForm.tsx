import { useState } from "react";

type HabitFormProps = {
  onAdd: (name: string) => void;
};
export function HabitForm({ onAdd }: HabitFormProps) {
  const [draft, setDraft] = useState<string>("");
  return (
    <div>
      <input
        className=""
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
      />
      <button
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
