import type { Habit } from "../types";
import { streakCount } from "../utils/streakUtils";
type HabitCardProps = {
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  habit: Habit;
};

export function HabitCard({ habit, onDelete, onComplete }: HabitCardProps) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex items-center justify-center gap-2 bg-gray-800 p-6 ">
      <li>{habit.name}</li>
      <button onClick={() => onDelete(habit.id)}>Delete</button>
      {!habit.completedDates.includes(today) ? (
        <button onClick={() => onComplete(habit.id)}>Complete Habit</button>
      ) : (
        <button disabled>Done</button>
      )}
      <p>{streakCount(habit.completedDates)}</p>
    </div>
  );
}
