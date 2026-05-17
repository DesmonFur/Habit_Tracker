import type { Habit } from "./types";
import { useState } from "react";
import { HabitDashboard } from "./components/HabitDashboard";
import { useLocalStorage } from "./hooks/useLocalStorage";
function App() {
  const [habits, setHabits] = useLocalStorage<Habit[]>("habits", []);
  const today = new Date().toISOString().split("T")[0];

  const handleAdd = (name: string): void => {
    if (!name.trim()) return;

    const newHabit: Habit = {
      id: crypto.randomUUID(),
      name: name,
      completedDates: [],
      createdAt: new Date().toISOString(),
    };
    setHabits([...habits, newHabit]);
  };

  const deleteHabit = (id: string): void => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const toggleComplete = (id: string): void => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id && !habit.completedDates.includes(today)) {
          return { ...habit, completedDates: [...habit.completedDates, today] };
        }

        return habit;
      }),
    );
  };
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <h1 className="text-4xl font-bold text-white">Habit Tracker</h1>
      <p className="text-gray-400">{habits.length} habits tracked</p>
      <HabitDashboard
        habits={habits}
        onAdd={handleAdd}
        onDelete={deleteHabit}
        onComplete={toggleComplete}
      ></HabitDashboard>
    </div>
  );
}

export default App;
