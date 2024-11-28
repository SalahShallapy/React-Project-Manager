import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [taskValue, setTaskValue] = useState("");

  const handleChange = function (e) {
    setTaskValue(e.target.value);
  };

  const handleClick = function () {
    if (taskValue.trim() === "") {
      return;
    }
    onAdd(taskValue);
    setTaskValue("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={taskValue}
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className=" text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
