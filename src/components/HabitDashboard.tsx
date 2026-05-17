import type { Habit } from "../types";
import { HabitForm } from "./HabitForm";
import { HabitList } from "./HabitList";
import { useLocalStorage } from "../hooks/useLocalStorage";

type HabitDashboardProps = {
  habits: Habit[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onAdd: (name: string) => void;
};
export function HabitDashboard({
  habits,
  onAdd,
  onComplete,
  onDelete,
}: HabitDashboardProps) {
  return (
    <div className="bg-red-600">
      <HabitForm onAdd={onAdd}></HabitForm>
      <ul className="text-white space-y-1">
        <HabitList
          habits={habits}
          onComplete={onComplete}
          onDelete={onDelete}
        ></HabitList>
      </ul>
    </div>
  );
}
