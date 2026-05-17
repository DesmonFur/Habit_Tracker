import type { Habit } from "../types";
import { HabitCard } from "./HabitCard";

type HabitListProps = {
  habits: Habit[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
};

export function HabitList({ habits, onDelete, onComplete }: HabitListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onComplete={onComplete}
          onDelete={onDelete}
        ></HabitCard>
      ))}
    </div>
  );
}
