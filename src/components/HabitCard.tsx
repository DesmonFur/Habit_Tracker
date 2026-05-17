import type { Habit } from "../types";

type HabitCardProps = {
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  habit: Habit;
};

export function HabitCard({ habit, onDelete, onComplete }: HabitCardProps) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex items-center justify-center gap-2">
      <li>{habit.name}</li>
      <button onClick={() => onDelete(habit.id)}>Delete</button>
      {!habit.completedDates.includes(today) ? (
        <button onClick={() => onComplete(habit.id)}>Complete Habit</button>
      ) : (
        <button disabled>Done</button>
      )}
    </div>
  );
}
