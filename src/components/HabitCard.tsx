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
    <div className="flex flex-col justify-between gap-2 bg-gray-800 p-6  m-4 w-full min-h-48 rounded-2xl text-white">
      <div className="flex justify-between w-full text-3xl font-bold mb-auto ">
        <h3 className=" ">{habit.name}</h3>
        <p className=" text-emerald-400">
          Streak: {streakCount(habit.completedDates)}
        </p>
      </div>
      <div className="flex gap-7 justify-between ">
        {!habit.completedDates.includes(today) ? (
          <button
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-500 transition-colors "
            onClick={() => onComplete(habit.id)}
          >
            Complete Habit
          </button>
        ) : (
          <button
            className="px-4 py-2 rounded-lg bg-gray-600 text-white font-medium text-sm hover:bg-gray-500 transition-colors"
            disabled
          >
            Done
          </button>
        )}{" "}
        <button
          className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium text-sm hover:bg-red-500 transition-colors"
          onClick={() => onDelete(habit.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
