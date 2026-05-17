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
    <div className="">
      <HabitForm onAdd={onAdd}></HabitForm>
      <HabitList
        habits={habits}
        onComplete={onComplete}
        onDelete={onDelete}
      ></HabitList>
    </div>
  );
}
