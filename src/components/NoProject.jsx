import NoProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ onAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={NoProjectImage}
        alt="Empty Task List"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Selecet a project or get started with a new one{" "}
      </p>
      <p className="mt-8">
        <Button onClick={onAddProject} label={"Create new project"} />
      </p>
    </div>
  );
}